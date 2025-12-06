---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQNJYO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH5XWTONnaZltoBWtuVhmpuISEHsaDpevMHOZSZS6ZDAiEA4bSv1uZIBOah4J%2Bsj6lg3a4lp0VZ46qg5Hb9n%2Fovd40q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF8umNtZSj4%2Bh2zDvSrcA3pkuQVluKTKu7E8iDLeInh12T2n4tMHoyjOiCx0lmyFbbK6261syZ%2Fdx%2BTMim7wee%2FZ%2BPXzyjWelhw0nOuNQCjPqEsCRYiXN2OcqM3uA13PeLihcbd339TG5AZvkBxYoRE324oQr7Ws7phH3t1ermsNZCojUhbW%2FbAAG4KnoYhLT8zJ7JA4FHJZIka4wop6AtpQQ29HOlbpFu2AaJnMES%2BELHccVoFCz2QA4zgOCpRLKgPFbyx29JJPKRlo%2BFkb%2FaMNp5o5m2lylDL4kI7spB2XFdsFr9X8oNz54lzU2nqIMp3XvfT3%2BKerSRMAGkKP6muiJQhqGMCH%2FSzFV%2BdsKaefEOzvak7FRebnYRatSucroz3PdsdU7hSu%2BIrA%2FnkoH0j1i89qqxZeI5VzPh7b5UuZVUO6RWCCDP4882HR0%2FTz4qwNR03q%2FI3euErPzfCV5wcxOmmG19tAAok9B%2B1WJF2t4ouxuSurOuBsikUYvsNIjwxImptLr47%2B%2BIFz3eWLkPKiYlBNzZg63j%2FSA3rvF1zgkwidS03FdqjKHqYWeJTG7xfompyvWk5as2XXhimKYeEYDxiibwsYKVA0%2FxqQIlgtKwLNRGl6dplF46qULUlGATe8%2B3Aq%2FNLM7zpyMKXezskGOqUBsx56Reu0QFobcM%2BQ2F7UH%2F4Q1Z2xjJPJqdECbwMc2Q6CiMQj0c4XtY%2FEU%2FlxhZ4WzwziG6kjo2k8wSpOk8DJvRNA9OkSrDEMHsKaiqPoaj6FdcKK%2F%2BTHrHdKojwDl7OItyInjp9tDzhkWV0jUxHSBt2r0UHdcauwov6T3IukdpUgRlujKuHwyJr8%2Blkvk0TcG3paP4Ox9PFc3kKxumD2N2VZ3XQu&X-Amz-Signature=a19d103a140c1cf0ef4ba2109f00a1487f301178f770819d7f98221574bb3514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGQNJYO7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH5XWTONnaZltoBWtuVhmpuISEHsaDpevMHOZSZS6ZDAiEA4bSv1uZIBOah4J%2Bsj6lg3a4lp0VZ46qg5Hb9n%2Fovd40q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF8umNtZSj4%2Bh2zDvSrcA3pkuQVluKTKu7E8iDLeInh12T2n4tMHoyjOiCx0lmyFbbK6261syZ%2Fdx%2BTMim7wee%2FZ%2BPXzyjWelhw0nOuNQCjPqEsCRYiXN2OcqM3uA13PeLihcbd339TG5AZvkBxYoRE324oQr7Ws7phH3t1ermsNZCojUhbW%2FbAAG4KnoYhLT8zJ7JA4FHJZIka4wop6AtpQQ29HOlbpFu2AaJnMES%2BELHccVoFCz2QA4zgOCpRLKgPFbyx29JJPKRlo%2BFkb%2FaMNp5o5m2lylDL4kI7spB2XFdsFr9X8oNz54lzU2nqIMp3XvfT3%2BKerSRMAGkKP6muiJQhqGMCH%2FSzFV%2BdsKaefEOzvak7FRebnYRatSucroz3PdsdU7hSu%2BIrA%2FnkoH0j1i89qqxZeI5VzPh7b5UuZVUO6RWCCDP4882HR0%2FTz4qwNR03q%2FI3euErPzfCV5wcxOmmG19tAAok9B%2B1WJF2t4ouxuSurOuBsikUYvsNIjwxImptLr47%2B%2BIFz3eWLkPKiYlBNzZg63j%2FSA3rvF1zgkwidS03FdqjKHqYWeJTG7xfompyvWk5as2XXhimKYeEYDxiibwsYKVA0%2FxqQIlgtKwLNRGl6dplF46qULUlGATe8%2B3Aq%2FNLM7zpyMKXezskGOqUBsx56Reu0QFobcM%2BQ2F7UH%2F4Q1Z2xjJPJqdECbwMc2Q6CiMQj0c4XtY%2FEU%2FlxhZ4WzwziG6kjo2k8wSpOk8DJvRNA9OkSrDEMHsKaiqPoaj6FdcKK%2F%2BTHrHdKojwDl7OItyInjp9tDzhkWV0jUxHSBt2r0UHdcauwov6T3IukdpUgRlujKuHwyJr8%2Blkvk0TcG3paP4Ox9PFc3kKxumD2N2VZ3XQu&X-Amz-Signature=51d7e463f9021165964d13913be3966692b330353900061487977e1bba344a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

