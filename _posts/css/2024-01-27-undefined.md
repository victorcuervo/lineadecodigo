---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ6YO6K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDMOm7FrpVKm0c6FUAEsDB7FDVQyByKtaccZxUNm3KdfAiEA3MY%2B3X4aLljAmivKx8m5FmAEbPw2Zn%2BqjcyZoPNvtH8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJUvQbXE0xRvXvZXfSrcA8pV%2BPmf9ADGBjLszg2KslPCMyZXK7jQpTlKMiPXQpEMHNA%2FBgWmsGcNB81nr%2Bjzxa%2F%2FPFLPHebWeQMDqNUNIeENx%2F%2Bh7LNLoc1%2Fr7%2BmCd0a7lGD21xX83kpPNlpvX0Z2aAPEpP5lBSg746hBanqhYeEpQeVRUtj2aXbnjFd6DcBagCkx0lZf5ng68qdVFhsRWfI0%2FhIYtrsTOvwl8txr164q2KyLnkXaf27rShZo5hrTM4BK19Iu0SmOyUnbPU2s8v%2BC2QlKC318DJWw9icG5xHcg2RoYtyif0%2BsiTFuzjA3SLqnqOXityWlmAwq%2BW8IhfAh%2FBi%2FjzCLtB4Tprq6aly0gJUfCJkWcQRSMo%2BRSOijafH%2F2qJ44NH2lNbAjF%2BOXu5OvFukq%2BNfU39UUbuubDd8NnN5ofhLdLoGLdUcAGYaaHKXJRDqXMMK0JE4sLMlganagtyiswSX2eLSpiNcByaWkzInDSVRbY8RVFetVIxG7tZrI3hO8kxqSrzAHQI2j%2FoWlZkL4gbkHf79eDJGlKd2PEBX3YB9uue2TVn7re2RqBocNyHAueZ0GRsnBDehVC5hx1U9aiDGTS46iQ2IyOS27yPkAZYyr9jll1ghcrAC0UsWOZMydmITsvpMJv3wckGOqUB38rUAXpkMlTGmy7I0%2FefXFq0n6Alp1wPB9olSc5k%2BmfdldwjsUb%2Bmq4AJVQG8Gnkkin48g9qabZOF5e8Sn5QpEz9KcvF4MQmbC6lDkRKZzQtpHc2iGmBYTp%2BuVvOq4AH2fw3JH07Wxnxy62nD4KIjLUqspsPQJFv19vJrbIerVmiA441TA8LiPKx9RptJV6FLWtRpqbIBj49T2qlQHwdDtQd8SqW&X-Amz-Signature=ca0d151d8b88e265d47cba3a3d4fc19e23e1a875997dc326ce28ed8ebcf0f023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVQ6YO6K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDMOm7FrpVKm0c6FUAEsDB7FDVQyByKtaccZxUNm3KdfAiEA3MY%2B3X4aLljAmivKx8m5FmAEbPw2Zn%2BqjcyZoPNvtH8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDJUvQbXE0xRvXvZXfSrcA8pV%2BPmf9ADGBjLszg2KslPCMyZXK7jQpTlKMiPXQpEMHNA%2FBgWmsGcNB81nr%2Bjzxa%2F%2FPFLPHebWeQMDqNUNIeENx%2F%2Bh7LNLoc1%2Fr7%2BmCd0a7lGD21xX83kpPNlpvX0Z2aAPEpP5lBSg746hBanqhYeEpQeVRUtj2aXbnjFd6DcBagCkx0lZf5ng68qdVFhsRWfI0%2FhIYtrsTOvwl8txr164q2KyLnkXaf27rShZo5hrTM4BK19Iu0SmOyUnbPU2s8v%2BC2QlKC318DJWw9icG5xHcg2RoYtyif0%2BsiTFuzjA3SLqnqOXityWlmAwq%2BW8IhfAh%2FBi%2FjzCLtB4Tprq6aly0gJUfCJkWcQRSMo%2BRSOijafH%2F2qJ44NH2lNbAjF%2BOXu5OvFukq%2BNfU39UUbuubDd8NnN5ofhLdLoGLdUcAGYaaHKXJRDqXMMK0JE4sLMlganagtyiswSX2eLSpiNcByaWkzInDSVRbY8RVFetVIxG7tZrI3hO8kxqSrzAHQI2j%2FoWlZkL4gbkHf79eDJGlKd2PEBX3YB9uue2TVn7re2RqBocNyHAueZ0GRsnBDehVC5hx1U9aiDGTS46iQ2IyOS27yPkAZYyr9jll1ghcrAC0UsWOZMydmITsvpMJv3wckGOqUB38rUAXpkMlTGmy7I0%2FefXFq0n6Alp1wPB9olSc5k%2BmfdldwjsUb%2Bmq4AJVQG8Gnkkin48g9qabZOF5e8Sn5QpEz9KcvF4MQmbC6lDkRKZzQtpHc2iGmBYTp%2BuVvOq4AH2fw3JH07Wxnxy62nD4KIjLUqspsPQJFv19vJrbIerVmiA441TA8LiPKx9RptJV6FLWtRpqbIBj49T2qlQHwdDtQd8SqW&X-Amz-Signature=af8d077b42ef88adbd57a269f6fa3391bda3bad8561e769af6f4bd478e4d7fc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

