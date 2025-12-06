---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4UDCUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX9MXtENs01kRMBeN4lqH03tZwZf6d22i1RkjO9u9lcAiBK2kXJzji%2F6rZBLCeP6XMdgtBNGsBCYhmVnUkIZNiuHCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMx7IYYt9vbK%2FkJonoKtwDlOU9aAvj%2BDM31K173BWx%2BUBO1KEGHY8c3mrfR1x%2BaiAaQteYBYWDoTNvxF3wiPzOn%2FRjXgIqvXhgn6xHUDHEoSVsKBpBSwXMfG0Od%2B0eF0ftt5yFXFfFMvSxIyFhCL8X%2FRfw0bnlO28oqYZFf73zKVCMc4YrE4Aan03xmAAAWjaYwQ7f6d4tUKELtq15y%2FAPOwtItwp7B%2B20PUznysSW%2FdWhlBw6fGwP1OTEdZzWFeRumeuOFpfPKR21koLmnKiLimC85UJ97%2Bf3talNL1jsWhzmkUBb5jEwUF59pgq5MmyBl0kQDWPxkaIcjl%2BYY%2Fkb5PCixpjuJNmZFIHmzg9zocJ9RoXhp%2BiG542PpTHVjbPsvUEW5SU%2BdAsHbC9NR%2FXLTVzSv4kVMvcA%2BjO9Dj3ksl4FG15MYkfNhlhkXKohX%2BoDNaC3E8GDCrUNyAcFVMd%2Bqkra4WQ9UKQ16QIM7osVuw%2BVFdlNoT1P%2FB2nCLVjimEd4BVPgGWyYGzw4RAsFmTdu7L4C6fBqomS0A4PH4rFeZrluYLd5AULZlT8fzj1DuVdZ6QBeviFk0sddOQQHn8hMGtNlt1ee2OTsr8zQMAlBG7e5opgKrXlnIpFThkbcMn4u39fBHCMwsYF5ZIw0NPSyQY6pgGhITOtkjdVBKDMJpxYFNWtvqHXi4Z8jeO3QEowHdcuVgARMmlvhg993xaxmxUqYcqlcRrJC4r%2FXqUJ3%2BqtxOD821Zz7NPaP%2Fd5WrPJ32ZnXLBSIw3CLSVyf%2FhA%2BjR%2BPVHiVqGLlGUqpWA1KG3nTfIvlkdoDshBg2LKD1x8nRbaHLw%2BNqSYQh0HbdW9uoHGTslgk7nrDBRHi9F6iQZ%2BCscfRUjbFJS8&X-Amz-Signature=5172301d189af3923853d3b319645b256e2aa8bf32e21c5e93250167417040b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4UDCUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX9MXtENs01kRMBeN4lqH03tZwZf6d22i1RkjO9u9lcAiBK2kXJzji%2F6rZBLCeP6XMdgtBNGsBCYhmVnUkIZNiuHCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMx7IYYt9vbK%2FkJonoKtwDlOU9aAvj%2BDM31K173BWx%2BUBO1KEGHY8c3mrfR1x%2BaiAaQteYBYWDoTNvxF3wiPzOn%2FRjXgIqvXhgn6xHUDHEoSVsKBpBSwXMfG0Od%2B0eF0ftt5yFXFfFMvSxIyFhCL8X%2FRfw0bnlO28oqYZFf73zKVCMc4YrE4Aan03xmAAAWjaYwQ7f6d4tUKELtq15y%2FAPOwtItwp7B%2B20PUznysSW%2FdWhlBw6fGwP1OTEdZzWFeRumeuOFpfPKR21koLmnKiLimC85UJ97%2Bf3talNL1jsWhzmkUBb5jEwUF59pgq5MmyBl0kQDWPxkaIcjl%2BYY%2Fkb5PCixpjuJNmZFIHmzg9zocJ9RoXhp%2BiG542PpTHVjbPsvUEW5SU%2BdAsHbC9NR%2FXLTVzSv4kVMvcA%2BjO9Dj3ksl4FG15MYkfNhlhkXKohX%2BoDNaC3E8GDCrUNyAcFVMd%2Bqkra4WQ9UKQ16QIM7osVuw%2BVFdlNoT1P%2FB2nCLVjimEd4BVPgGWyYGzw4RAsFmTdu7L4C6fBqomS0A4PH4rFeZrluYLd5AULZlT8fzj1DuVdZ6QBeviFk0sddOQQHn8hMGtNlt1ee2OTsr8zQMAlBG7e5opgKrXlnIpFThkbcMn4u39fBHCMwsYF5ZIw0NPSyQY6pgGhITOtkjdVBKDMJpxYFNWtvqHXi4Z8jeO3QEowHdcuVgARMmlvhg993xaxmxUqYcqlcRrJC4r%2FXqUJ3%2BqtxOD821Zz7NPaP%2Fd5WrPJ32ZnXLBSIw3CLSVyf%2FhA%2BjR%2BPVHiVqGLlGUqpWA1KG3nTfIvlkdoDshBg2LKD1x8nRbaHLw%2BNqSYQh0HbdW9uoHGTslgk7nrDBRHi9F6iQZ%2BCscfRUjbFJS8&X-Amz-Signature=e084420054f4103e03fbe55f8fd8e3ba11713dff0fb36dab503bf1972ea74593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

