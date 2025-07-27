export class SlugHelper {
  static generateSlug(value: string): string {
    return value
      .toLowerCase()
      .normalize("NFD")                      // Türkçe karakterleri sadeleştirmek için
      .replace(/[\u0300-\u036f]/g, "")      // Aksanları siler
      .replace(/ç/g, "c")
      .replace(/ş/g, "s")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ö/g, "o")
      .replace(/ı/g, "i")
      .replace(/[\/\\]/g, "-")              // / ve \ karakterlerini tireye çevir
      .replace(/[^a-z0-9\s-]/g, "")         // Diğer özel karakterleri temizle
      .trim()
      .replace(/\s+/g, "-");                // Boşlukları tek tireye çevir
  }
}
