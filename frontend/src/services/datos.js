export const obtenerServicios = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: "srv-001",
                    titulo: "Análisis de Vulnerabilidades",
                    descripcion: "Identificacion proactiva de brechas en sus sistemas antes de que puedan ser explotadas."
                },
                {
                    id: "srv-002",
                    titulo: "Auditoria de Sistemas",
                    descripcion: "Evaluación exhaustiva de su arquitectura de red y cumplimiento de normativas de seguridad."
                },
                {
                    id: "srv-003",
                    titulo: "Arquitectura Segura",
                    descripcion: "Diseño e implementación de infraestructuras Zero Trust adaptadas a su modelo de negocio."
                }
            ]);
        }, 800);
    });
};