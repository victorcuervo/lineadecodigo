---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YF6BNKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmd7A6jEEfMxX4WyCmR3XVQ4qKzXisORLPWWd4ed%2Bf4QIgRc1sLDGiitxTrch9NReKbYMU35zfS710CohV2TDGbZ4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKIoLgGLH8W%2BEDlircAzLRt%2BmcbBqJOvAUCHH14FsX1EMQsJVMVOxVqycUeFW71IwiFD3Jt99q9%2BA18HEQXSnWYOLuRq%2FOB9FvBDcFnva%2B7lV8M71LIymVgrgWOH0B0HeF137cpXaayHU1YwxfQsMQJ61J4wYN2T9lSwy0%2F7ACugl9W90yKaoaF6KHIPzXKebWs1ogsLkBvizemqQzYWl52xuWHQiAQUJRbRrerRKXvGWzbKrdkIIr3iAjR2U3MduTWZNbQhjxmFJpk8zJNnQ2r3cW4%2B0zz2Z4JuCYxz51LhEQdkNfzElrEfwUBx7abzoIALN4ot6qSOj8iSVg3Kvbjznayh6SHEZKMBkGLtQ8f1PuCTQlT6ye9ejfTjyUslDfqm01DG4afl6YwxAK4soxWx04fWr0I9eNrV4VQ7w%2BGD2Ezt%2BdF8K60Tef42%2B8zjJuAfsHkixfAnG4wEEeehKSGC0Qq%2BdxKHXUCKie%2BcTcJg%2BQ1WRsU1c43abhOcw3w6zWvFTsw%2Bmb2fdb9tQyywqegyxyAmQhCWFFXMkkDxGY5DDWy1PzbkmwPl61cebvhWe7YLJwOeReOx4zCIsulm5HJEsTiyLvqohpvkLyY6i6feEVLDofBWLG8fBblFSezH2PNd%2BW5AZCphrGMLua1ckGOqUBSyRNOL4I1DheYzoItujvDK8M%2F%2F6EWf%2B9QOl2sk03rmJUg2IW8RFEIoRqw%2F94c1hJZADI7lGYgQUhVRno%2BoLEFnY2pPWT7C1SA2UGLqZTI9z3anXHs5FR1I4uSiXiCEVfkQRC5cjgUoTZn%2F%2Fr01lSqeegMTelZRxJEZNv%2BR6dsggccTr7jMsU1O6L6e0vYQwqbId%2BjlRDkU3D%2FB1vd%2F9e19Prh70i&X-Amz-Signature=d07c129d781dae210699304bdf6dd5f7b97769b1d763466c18a6136d99f42d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YF6BNKE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T113418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmd7A6jEEfMxX4WyCmR3XVQ4qKzXisORLPWWd4ed%2Bf4QIgRc1sLDGiitxTrch9NReKbYMU35zfS710CohV2TDGbZ4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKIoLgGLH8W%2BEDlircAzLRt%2BmcbBqJOvAUCHH14FsX1EMQsJVMVOxVqycUeFW71IwiFD3Jt99q9%2BA18HEQXSnWYOLuRq%2FOB9FvBDcFnva%2B7lV8M71LIymVgrgWOH0B0HeF137cpXaayHU1YwxfQsMQJ61J4wYN2T9lSwy0%2F7ACugl9W90yKaoaF6KHIPzXKebWs1ogsLkBvizemqQzYWl52xuWHQiAQUJRbRrerRKXvGWzbKrdkIIr3iAjR2U3MduTWZNbQhjxmFJpk8zJNnQ2r3cW4%2B0zz2Z4JuCYxz51LhEQdkNfzElrEfwUBx7abzoIALN4ot6qSOj8iSVg3Kvbjznayh6SHEZKMBkGLtQ8f1PuCTQlT6ye9ejfTjyUslDfqm01DG4afl6YwxAK4soxWx04fWr0I9eNrV4VQ7w%2BGD2Ezt%2BdF8K60Tef42%2B8zjJuAfsHkixfAnG4wEEeehKSGC0Qq%2BdxKHXUCKie%2BcTcJg%2BQ1WRsU1c43abhOcw3w6zWvFTsw%2Bmb2fdb9tQyywqegyxyAmQhCWFFXMkkDxGY5DDWy1PzbkmwPl61cebvhWe7YLJwOeReOx4zCIsulm5HJEsTiyLvqohpvkLyY6i6feEVLDofBWLG8fBblFSezH2PNd%2BW5AZCphrGMLua1ckGOqUBSyRNOL4I1DheYzoItujvDK8M%2F%2F6EWf%2B9QOl2sk03rmJUg2IW8RFEIoRqw%2F94c1hJZADI7lGYgQUhVRno%2BoLEFnY2pPWT7C1SA2UGLqZTI9z3anXHs5FR1I4uSiXiCEVfkQRC5cjgUoTZn%2F%2Fr01lSqeegMTelZRxJEZNv%2BR6dsggccTr7jMsU1O6L6e0vYQwqbId%2BjlRDkU3D%2FB1vd%2F9e19Prh70i&X-Amz-Signature=1181d5153e9009dbc96c2980c9230323254142c35c230bdbc0c38c304fc0483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

