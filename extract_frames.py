import cv2
import os
import sys

def main():
    video_path = os.path.join("assets", "videowebrefix.mp4")
    output_dir = os.path.join("assets", "frames")

    if not os.path.exists(video_path):
        print(f"Error: No se encontró el video en '{video_path}'")
        sys.exit(1)

    # Eliminar frames anteriores para evitar remanentes de otras resoluciones
    if os.path.exists(output_dir):
        print("Limpiando directorio de frames antiguos...")
        for filename in os.listdir(output_dir):
            if filename.endswith(".webp"):
                try:
                    os.remove(os.path.join(output_dir, filename))
                except Exception as e:
                    print(f"No se pudo eliminar {filename}: {e}")

    # Inicializar video
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: No se pudo abrir el archivo de video '{video_path}'")
        sys.exit(1)

    # Obtener metadatos
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print("========================================")
    print("DETALLES DEL VIDEO ENCONTRADO:")
    print(f"  Ruta: {video_path}")
    print(f"  Resolución: {width}x{height}px")
    print(f"  Total de cuadros (frames): {total_frames}")
    print(f"  FPS: {fps:.2f}")
    print(f"  Duración: {duration:.2f} segundos")
    print("========================================")

    # Crear carpeta de salida
    os.makedirs(output_dir, exist_ok=True)

    # Determinar si necesitamos omitir cuadros para optimizar velocidad de carga
    # Para scrollytelling web, entre 100 y 200 cuadros es el "sweet spot".
    target_frames = 150
    step = 1
    if total_frames > 250:
        step = max(1, round(total_frames / target_frames))
        print(f"Optimización: El video tiene muchos cuadros ({total_frames}).")
        print(f"Se extraerá 1 de cada {step} cuadros para lograr un rendimiento web óptimo.")

    count = 0
    extracted_count = 0

    print("\nIniciando extracción de cuadros a formato WebP...")

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if count % step == 0:
            frame_name = f"frame_{extracted_count:04d}.webp"
            frame_path = os.path.join(output_dir, frame_name)
            
            # Guardar frame en WebP con calidad 85 (excelente calidad, peso mínimo)
            # Para WebP en OpenCV se usa el flag cv2.IMWRITE_WEBP_QUALITY
            cv2.imwrite(frame_path, frame, [int(cv2.IMWRITE_WEBP_QUALITY), 85])
            
            extracted_count += 1
            if extracted_count % 10 == 0 or extracted_count == 1:
                print(f"  -> Guardado: {frame_name} ({extracted_count} de aprox. {total_frames // step})")

        count += 1

    cap.release()
    print("========================================")
    print("¡EXTRACCIÓN COMPLETADA CON ÉXITO!")
    print(f"  Cuadros extraídos: {extracted_count}")
    print(f"  Guardados en: {output_dir}/")
    print("========================================")

if __name__ == "__main__":
    main()
