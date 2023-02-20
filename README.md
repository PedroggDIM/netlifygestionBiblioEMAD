## Definición de Proyecto Individual

## Descripción
La aplicación permitirá almacenar y consultar los préstamos de libros en una biblioteca.  

Permitirá consultas avanzadas que proporcionen información útil para la getión de la biblioteca.

## Diagrama de clases de diseño

![Diagrama de Diseño MVP](https://git.institutomilitar.com/Fluqueta/practica-individual_-biblioteca_emad/-/wikis/EsquemaBiblioteca)



**Cumplimiento de requisitos**
1. **Herencia**: Se realizará sobre `Documento` y sus subtipos: `Libro`, `Revista`y `dvd`.
2. **Relación One-To-Many**: Relación entre ``Prestamo`` y `Documento`.
3. **Método personalizado**: obtener los documentos más utilizados entre dos fechas determinadas con le objetivo de adquirir nuevas copias.
4. **Listado**: Se mostrarán los préstamos de un usuario y los de cada documento indicndo los documentos que no se hayan utilizado.
5. **CRUD**: Se usarán los controles adecuados para hacer el CRUD. Se usará el formulario de la figura 1.


## Interfaz de usuario

Figura 1:  
![Figura 1](https://git.institutomilitar.com/Fluqueta/practica-individual_-biblioteca_emad/-/wikis/InterfaceBiblioteca)
