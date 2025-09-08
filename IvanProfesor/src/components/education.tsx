import { GraduationCap, Award, Eye } from "lucide-react";
import { useState } from "react";
import profileImage from "@assets/WhatsApp Image 2025-06-14 at 18.57.18 (1)_1757331010735.jpeg";
import certificate1 from "@assets/WhatsApp Image 2025-09-07 at 19.42.02_1757331010737.jpeg";
import certificate2 from "@assets/WhatsApp Image 2025-09-08 at 14.40.01_1757331659996.jpeg";

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      image: certificate1,
      title: "Certificat de Specializare în Pedagogie",
      description: "Curs de perfecționare profesională în metodologii de predare moderne"
    },
    {
      image: certificate2,
      title: "Certificat de Excelență în Predare", 
      description: "Recunoaștere pentru metodologii inovatoare și rezultate deosebite în educație"
    }
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="studii" className="py-12 sm:py-16 bg-muted/30" data-testid="education-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" data-testid="education-title">
              Studii și Certificări
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="education-subtitle">
              Fundația academică și profesională care garantează calitatea predării
            </p>
          </div>

          <div className="mb-12 sm:mb-16 animate-slide-up animate-delay-200">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Fundația Academică Solidă</h3>
              </div>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Studiile mele aprofundate în <strong>matematică și informatică</strong> îmi oferă o înțelegere completă a materiei pe care o predau. Această formare academică riguroasă mă ajută să explic conceptele complexe într-un mod clar și accesibil.
                </p>
                <p>
                  Prin cunoștințele dobândite în <strong>psihologia copilului</strong>, reușesc să mă adaptez perfect stilului de învățare al fiecărui elev, creând o atmosferă de învățare personalizată și eficientă.
                </p>
                <p>
                  Cursurile de <strong>specializare în pedagogie modernă</strong> pe care le-am absolvit îmi permit să folosesc cele mai noi metodologii de predare, adaptate realităților educaționale contemporane.
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={index}
                className="bg-card p-4 sm:p-6 rounded-xl border border-border hover-lift animate-fade-in"
                style={{animationDelay: `${(index + 1) * 0.2}s`}}
                data-testid={`certificate-card-${index}`}
              >
                <div className="relative mb-3 sm:mb-4">
                  <img 
                    src={cert.image}
alt={`Certificat ${cert.title} - Andrei Ivan profesor matematică`}
                    className="w-full h-40 sm:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal(cert.image)}
                    data-testid={`certificate-image-${index}`}
                  />
                  <button
                    onClick={() => openImageModal(cert.image)}
                    className="absolute top-2 right-2 bg-primary text-primary-foreground p-1.5 sm:p-2 rounded-full hover:bg-primary/90 transition-colors"
                    data-testid={`certificate-zoom-${index}`}
                  >
                    <Eye size={14} />
                  </button>
                </div>
                <div className="flex items-center mb-2 sm:mb-3">
                  <Award className="text-accent mr-2 sm:mr-3 flex-shrink-0" size={18} />
                  <h4 className="text-base sm:text-lg font-semibold leading-tight" data-testid={`certificate-title-${index}`}>
                    {cert.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" data-testid={`certificate-description-${index}`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Dezvoltare Profesională Continuă</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mă perfecționez constant prin participarea la cursuri de specializare, conferințe educaționale și prin colaborarea cu reviste de specialitate în matematică, pentru a oferi elevilor mei cele mai bune metode de învățare.
            </p>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
          data-testid="image-modal-overlay"
        >
          <div className="relative max-w-full max-h-full w-full sm:max-w-4xl">
            <img 
              src={selectedImage}
              alt="Certificat mărit"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              data-testid="modal-image"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white text-black p-1.5 sm:p-2 rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base"
              data-testid="modal-close-button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}