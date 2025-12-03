---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUG5NVB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCoA1xiJcIUGvvkOqXMLx%2F06eaK%2BMMmhZkNIjvUJ%2F9H9QIgbxuKJaPNJISzaVrbWKAg8XQQXqZBWSL9Hg4M6kza3AYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJaTk9JOxO6yN91gtCrcA6rm5cH9OAz5i1ulFUWvmGYYlcFu1wzryrr82re7ZbMtLtpssUp3hZ7faXOW8YTT9%2BKAsOMe7u4anMU2J5SsM3LNqzbF9lW6PTwA5UYK4KTMkU4atXF7GN35dJ6hJnAk2FhhgW3jVOtJKeBQeCHkWhIrqdUrf0Uky7uL1qp5JSMyC5loHjSbsVgEPWYRewmVKuLK6kVCBPQhSyatEYuDVideAfPCFX5k6R6N%2Fz8b%2FleKYow7uMWE%2BBLJQJcdS21qG1qopiA3xXxp7LBBAqaGq%2B2JU9yJWWo460%2Fpe8CTj0PZ3z4g3NKlYFC6IT6jqgvCMS1VB9aWpkYkdA2VPFbdkiBQ5GLB3tga60hjCpHld18yHD7XTAZ9nfjNGBCQ8hnDLziAC9m63EaeWvjZFql5JG0PwVSmgEWpXR53yeldqAE014OhV66ve7t8uEP7%2F0CGYW2WG87u3SKBqRnqmi%2F27l7WBGmvp0dbROxxCvUkZxpiM3PC2HjbZ8KBaUo7EDpPCGYc1gwN5qKanVosC1jN45eDyuvc2BPLhZoX1F8xswfF6SjAgg0ypmBPQQTtzyl9yABob%2BnTkyeEDZN49FP9xoT49A7SCJg%2FGFAxL1dreuHAaweCLH5rcqVKMQwUMKm9wskGOqUBxb%2Fq%2FVxWMeLJjfqWcMbzodGOx2MEJKs%2Fs3uY10306I1EwNH6Io2NXaF4Tbn4cpneQ%2FPNM6v602AAMUBeDLZHRbttCH8UEINRbF0UM9OYmCT1XfMWt4V8tmjpOVYLBcLaJhkawGNenr8zYE4eODB1QTaa5%2BSBwVFMuH0JTD%2FHEJuudscAZ%2FSpOoeffW0A6FWvHuNVU9VXgulqEr%2Fe6%2FV8ftp05TAz&X-Amz-Signature=59ed73ce94991ac066406950563297e3c06d6ac50fb24c12748b7c909f4d84e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MUG5NVB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCoA1xiJcIUGvvkOqXMLx%2F06eaK%2BMMmhZkNIjvUJ%2F9H9QIgbxuKJaPNJISzaVrbWKAg8XQQXqZBWSL9Hg4M6kza3AYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJaTk9JOxO6yN91gtCrcA6rm5cH9OAz5i1ulFUWvmGYYlcFu1wzryrr82re7ZbMtLtpssUp3hZ7faXOW8YTT9%2BKAsOMe7u4anMU2J5SsM3LNqzbF9lW6PTwA5UYK4KTMkU4atXF7GN35dJ6hJnAk2FhhgW3jVOtJKeBQeCHkWhIrqdUrf0Uky7uL1qp5JSMyC5loHjSbsVgEPWYRewmVKuLK6kVCBPQhSyatEYuDVideAfPCFX5k6R6N%2Fz8b%2FleKYow7uMWE%2BBLJQJcdS21qG1qopiA3xXxp7LBBAqaGq%2B2JU9yJWWo460%2Fpe8CTj0PZ3z4g3NKlYFC6IT6jqgvCMS1VB9aWpkYkdA2VPFbdkiBQ5GLB3tga60hjCpHld18yHD7XTAZ9nfjNGBCQ8hnDLziAC9m63EaeWvjZFql5JG0PwVSmgEWpXR53yeldqAE014OhV66ve7t8uEP7%2F0CGYW2WG87u3SKBqRnqmi%2F27l7WBGmvp0dbROxxCvUkZxpiM3PC2HjbZ8KBaUo7EDpPCGYc1gwN5qKanVosC1jN45eDyuvc2BPLhZoX1F8xswfF6SjAgg0ypmBPQQTtzyl9yABob%2BnTkyeEDZN49FP9xoT49A7SCJg%2FGFAxL1dreuHAaweCLH5rcqVKMQwUMKm9wskGOqUBxb%2Fq%2FVxWMeLJjfqWcMbzodGOx2MEJKs%2Fs3uY10306I1EwNH6Io2NXaF4Tbn4cpneQ%2FPNM6v602AAMUBeDLZHRbttCH8UEINRbF0UM9OYmCT1XfMWt4V8tmjpOVYLBcLaJhkawGNenr8zYE4eODB1QTaa5%2BSBwVFMuH0JTD%2FHEJuudscAZ%2FSpOoeffW0A6FWvHuNVU9VXgulqEr%2Fe6%2FV8ftp05TAz&X-Amz-Signature=73d4f96b56157360b970b6d7f5c49b380de25e0f3e49dbb10848feda3c2f9a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

