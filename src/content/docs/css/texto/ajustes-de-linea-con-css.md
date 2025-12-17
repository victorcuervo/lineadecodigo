---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYNYGNR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FPWGEE9w7kaCbEFuYCSr1K%2BEJgq17obP93BfLkyEZvAiEAqcacvxllQ1jVrUwrS9Sor2Y82k8urX%2F4b8nRkrl6iesq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNMPp5SubfQKbTOVtCrcA2lwUPpH2q%2FLdrgAir4Ze5q1Jr2GC5lhVBNUYkmXAV4NYRY9MdWQuUT10rS8z4kwAIBhim3%2BJ2rf70eRmqPr8Rh01W1%2FaAppJU%2FlHqV%2B59dDg2RDik5O%2Bproi0w05aKBznzqSAuBdzgvoLtoHe%2F5cIVDFi3gWuCpPWo8w4L9xwAq8uCJW6jeCJLFTXOs7ge5FP718wXxQrwERwnddET1ZNtCK0jDeSna9QxSRmQOuf2nW%2BtYbkdtjVa3d3OC0gZi7MH8etsg73zcFmLvMd7IwklasKr38hS3BzeX9TJt1jhurS1Fk%2BWJYkVGweVWmUbODaa%2Fx88KZtkVWFHFjKQDJ2xQuXR4ff2pcqgSBx78mAznkQQ3HCuOixekhH3fFPGPkUrASJVt7Oqv3na1wWKignDtq5Z40KxLsRpr65iToE4QJs%2BM06YT9kMdAylKY4ic9TkNPMzLUqPVcKx%2B8%2FWEJDx%2BAqWQsvP%2BPPMWvqt5iDgL4xaMYZdQ%2FmDQiXjM4tngqUzkTkP1DVSYR2kG9y1GwKowu%2Fig%2FmNd8cOQhFBoARalSToV27fQkeWpi9DF03XZOnH1gR%2FjIgYT9rWLVvAmucUeQsxisOixFewbePQtPKiB%2BStI8ILzTo6AiqRpMKv7h8oGOqUBt0R8UwXr%2B0H5jdAOsLnLcgvb%2FK5lG9%2BpvOa1y9LFdJVjLXPXrO48pFSIjZUK186zHOl7GwKVr318V8QIUrxth%2FnOV8fO9BIQcAALb8DJSwgUQ%2F1B3lOiw14%2FJ6EViMHmJgkf2cYAK4Va3TXRChG9CHG7309rySbgxERloaJRjrJ7PqymfPEXA%2FBTF9aWIeDqFDRtM%2FS4XP0yHhbyz6%2FXwAR%2BKwmg&X-Amz-Signature=d80ec2831cb9b6642b603f61f6c5b5d027eb79e2d4657aa32e148d41c3b006c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZYNYGNR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FPWGEE9w7kaCbEFuYCSr1K%2BEJgq17obP93BfLkyEZvAiEAqcacvxllQ1jVrUwrS9Sor2Y82k8urX%2F4b8nRkrl6iesq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNMPp5SubfQKbTOVtCrcA2lwUPpH2q%2FLdrgAir4Ze5q1Jr2GC5lhVBNUYkmXAV4NYRY9MdWQuUT10rS8z4kwAIBhim3%2BJ2rf70eRmqPr8Rh01W1%2FaAppJU%2FlHqV%2B59dDg2RDik5O%2Bproi0w05aKBznzqSAuBdzgvoLtoHe%2F5cIVDFi3gWuCpPWo8w4L9xwAq8uCJW6jeCJLFTXOs7ge5FP718wXxQrwERwnddET1ZNtCK0jDeSna9QxSRmQOuf2nW%2BtYbkdtjVa3d3OC0gZi7MH8etsg73zcFmLvMd7IwklasKr38hS3BzeX9TJt1jhurS1Fk%2BWJYkVGweVWmUbODaa%2Fx88KZtkVWFHFjKQDJ2xQuXR4ff2pcqgSBx78mAznkQQ3HCuOixekhH3fFPGPkUrASJVt7Oqv3na1wWKignDtq5Z40KxLsRpr65iToE4QJs%2BM06YT9kMdAylKY4ic9TkNPMzLUqPVcKx%2B8%2FWEJDx%2BAqWQsvP%2BPPMWvqt5iDgL4xaMYZdQ%2FmDQiXjM4tngqUzkTkP1DVSYR2kG9y1GwKowu%2Fig%2FmNd8cOQhFBoARalSToV27fQkeWpi9DF03XZOnH1gR%2FjIgYT9rWLVvAmucUeQsxisOixFewbePQtPKiB%2BStI8ILzTo6AiqRpMKv7h8oGOqUBt0R8UwXr%2B0H5jdAOsLnLcgvb%2FK5lG9%2BpvOa1y9LFdJVjLXPXrO48pFSIjZUK186zHOl7GwKVr318V8QIUrxth%2FnOV8fO9BIQcAALb8DJSwgUQ%2F1B3lOiw14%2FJ6EViMHmJgkf2cYAK4Va3TXRChG9CHG7309rySbgxERloaJRjrJ7PqymfPEXA%2FBTF9aWIeDqFDRtM%2FS4XP0yHhbyz6%2FXwAR%2BKwmg&X-Amz-Signature=59a21f3b966b96d4e4f1565df9c65b7a83902716995c5d2d7223e19e1ad9fa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

