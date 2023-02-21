## Definición de Proyecto Individual

## Descripción
La aplicación permitirá almacenar y consultar los préstamos de libros en una biblioteca.  

Permitirá consultas avanzadas que proporcionen información útil para la getión de la biblioteca.

## Diagrama de clases de diseño

![Diagrama_de_Diseño](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/a161639bd4128b385a0fd6f16930fbe5/EsquemaBiblioteca_EMAD.jpg){width=100 height=100}



**Cumplimiento de requisitos**
1. **Herencia**: Se realizará sobre `Documento` y sus subtipos: `Escrito`, `Audiovisual.
2. **Relación One-To-Many**: Relación entre `Prestamo` y `Documento`.`Un sólo préstamo puede incluir varios documentos.
3. **Método personalizado**: Obtener los documentos más utilizados entre dos fechas determinadas con le objetivo de adquirir nuevas copias.
4. **Listado**: Se mostrarán los préstamos de un usuario y los de cada documento indicndo los documentos que no se hayan utilizado.
5. **CRUD**: Se usarán los controles adecuados para hacer el CRUD. Se usará el formulario de la figura 1.


## Interfaz de usuario

Figura 1:  
![Figura_1](https://git.institutomilitar.com/Fluqueta/proyecto_biblioteca_emad/-/wikis/uploads/969f7ee195a6fdef006c892c585eb628/Interfaces_Biblioteca.jpg){width=100 height=100}
