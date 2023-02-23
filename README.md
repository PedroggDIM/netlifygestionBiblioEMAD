# BIBLIOTECA EMAD

## Descripción
El uso de la bibliotec del EMAD es intensivo en algunos documentos, la correcta organización y adquisición de nuevos documentos necesita una adecuada obtención de datos de uso.
Actualmente ese control se hace "a mano", mediante fichas de prestamo y se desea automatizar ese proceso, con el objetivo de obtener la información necesaria para conseguir optimizar la disposición de los ejemplares y la adquisición de nuevos en funcióin de la demanda.
Para ello la aplicación permitirá:
1. Gestionar el préstamo y devolución de de los doumentos. 
1. Consulta de los usuarios que han tenido acceso a un documento.
1. Consulta de los docuementos prestados a un usuario.
1. Obtener los documentos más utilizados entre dos fechas determinadas con le objeto de adquirir nuevas copias.
1. Se mostrarán los préstamos de un usuario y los de cada documento indicando los documentos que no se hayan utilizado.

Además se espera que la aplicación permita consultas avanzadas que proporcionen información útil para la getión de la biblioteca.

## Diagrama de clases de diseño

![Diagrama_de_Diseño](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/a161639bd4128b385a0fd6f16930fbe5/EsquemaBiblioteca_EMAD.jpg)


**Cumplimiento de requisitos**
- 1. **Herencia**: Se realizará sobre `Documento` y sus subtipos: `Escrito`, `Audiovisual`.
- 2. **Relación One-To-Many**: Relación entre `Prestamo` y `Documento`.`Un sólo préstamo puede incluir varios documentos.
- 3. **Método personalizado**: Obtener los documentos más utilizados entre dos fechas determinadas con le objetivo de adquirir nuevas copias.
- 4. **Listado**: Se mostrarán los préstamos de un usuario y los de cada documento indicando además los documentos que no se hayan utilizado.
- 5. **CRUD**: Se usarán los controles adecuados para hacer el CRUD. Se usará los siguientes formularios.
      * Formulario de préstamo (figura 1).
      * Formulario de devolución (figura 2).
      * formulario de consulta de usuario (figura 3).
      * Formulario de consulta de documento (figura 4).  

- 6. **URLs del proyecto**:--

      Repositorio proyecto: https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad

      Libería: https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/home

- 7. **Despliegue en internet**:--

        TBD

## Interfaz de usuario

Figura 1:  
![Figura_1](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/392ee2522254dd9ac5960c670e835f53/Interface_Biblioteca_EMAD_Prestamo.jpg)

Figura 2:

![Figura_2](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/5eedbf1cd5f4a613e371e932420760c0/Interface_Biblioteca_EMAD_Devolucion.jpg)

Figura 3:

![Figura_3](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/d89e8046bc4a41573c89f0ffdf1b6888/Interface_Biblioteca_EMAD_Consulta_Usuario.jpg)

Figura 4:

![Figura_3](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/985159e01402abc24fbe53c76b3954ea/Interface_Biblioteca_EMAD_ConsultaLibro.jpg)
