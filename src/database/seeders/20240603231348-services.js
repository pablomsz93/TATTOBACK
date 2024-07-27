"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "services",
      [
        {
          id: 1,
          service_name: "Tatuajes personalizados",
          description:
            "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { 
          id:2,
          service_name: "Tatuajes del catálogo",
          description: "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo.Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        { 
          id:3,
          service_name: "Restauración y rejuvenecimiento de trabajos",
          description: "Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        { 
          id:4,
          service_name: "Colocación de piercings y dilatadores",
          description: "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          id:5,
          service_name: "Venta de piercings y otros artículos",
          description: "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único.",
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("services", null, {});
  },
};
