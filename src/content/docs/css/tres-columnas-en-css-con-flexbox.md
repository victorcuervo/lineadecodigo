---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAN6S24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCfaWQ9ADwF86BVc%2Bqg3OuUrLcOV99e%2FEYVhuaZgpVz5wIgN7J6rWcgtTkOobcnjNRkSMbH0wfpHkt2dzXIvO%2BmFRYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGRl021tcCammQGtWSrcA9f%2BH5ORetddMhxJgf%2B0wn8bcwuD%2FxOX3nRpxZu7W%2Bs38VYlpIgxRqSRt197VSFLHtM3ibXBWh9MXmvj75iJPIWzdouxluYZ%2B669Hp7v3AFi5bhykxJQBOMLii036EqpWS%2FdXBHNLy%2BI5c6XSdXJ6FG8tjUTc3FxmGq1NLro5zpMUMJo99g%2FtsURIs3Qzg81k3jrY7z%2F7bQmgki%2FlUNYUc8%2F50NiDzYJ1FEdtaKUApOn4mxvY5BneBPDVXJCje%2Ftgbv8pAYhmTwXCt5whtpVbEF9aOQ5WxLIDl97vvxm3IsnB0KgtQQyhzlGGQmbZAH2K5iHAV42ktjedl3Kor8KwDQRjpi9GGbw2YIM18WVkeKY4PCfV7%2FnAYWlGGodLXyDshGd7iiQuzH9wgoqf4TSRpVo%2FO573aQLMeb5qVLWghsL5plkWU8Zf1TvbQXSyIJAi1vtjJoNDFIYFx%2FJthPmz4OoeaBRniZXtIzFoIrONMRnShMwZus6HBtZpAa8b%2FwTGODO4fy2JTu%2F7rRprrdKuMpBx%2BzVqYfNbRHE0ZevkusxmZGSitrc9FsXBAB3NvzCxErPSG3rTqtHYkfokQxOtQJyX4ojCF7YEak6YwV%2FUwXXDP3vF%2F9IzGn0gw4GML29wskGOqUB2uhHmZJvZpqrnlRiaItN4qOUWNIuRQGEBCOkeES3c3z7GEZhn3sI6AYdHDmUGfO4KRHzagym5%2BHJGBKF5cwZTociTReNghNjrDLRJOvPff16nnAscr%2FSPKHcnrY43kExF1dENpMhBbNRXfCtrY9FEuQgjD6tYB1Tg35QZ2F%2BjU9898kDuCCr8agN4ccHk3UJE4i1OlmkxjyHVc%2BRsL7jee3D3oud&X-Amz-Signature=0c7c447f291536b2c0e90c50f7523af1948b1fcaad174d96d6cd425e99762928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAN6S24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCfaWQ9ADwF86BVc%2Bqg3OuUrLcOV99e%2FEYVhuaZgpVz5wIgN7J6rWcgtTkOobcnjNRkSMbH0wfpHkt2dzXIvO%2BmFRYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGRl021tcCammQGtWSrcA9f%2BH5ORetddMhxJgf%2B0wn8bcwuD%2FxOX3nRpxZu7W%2Bs38VYlpIgxRqSRt197VSFLHtM3ibXBWh9MXmvj75iJPIWzdouxluYZ%2B669Hp7v3AFi5bhykxJQBOMLii036EqpWS%2FdXBHNLy%2BI5c6XSdXJ6FG8tjUTc3FxmGq1NLro5zpMUMJo99g%2FtsURIs3Qzg81k3jrY7z%2F7bQmgki%2FlUNYUc8%2F50NiDzYJ1FEdtaKUApOn4mxvY5BneBPDVXJCje%2Ftgbv8pAYhmTwXCt5whtpVbEF9aOQ5WxLIDl97vvxm3IsnB0KgtQQyhzlGGQmbZAH2K5iHAV42ktjedl3Kor8KwDQRjpi9GGbw2YIM18WVkeKY4PCfV7%2FnAYWlGGodLXyDshGd7iiQuzH9wgoqf4TSRpVo%2FO573aQLMeb5qVLWghsL5plkWU8Zf1TvbQXSyIJAi1vtjJoNDFIYFx%2FJthPmz4OoeaBRniZXtIzFoIrONMRnShMwZus6HBtZpAa8b%2FwTGODO4fy2JTu%2F7rRprrdKuMpBx%2BzVqYfNbRHE0ZevkusxmZGSitrc9FsXBAB3NvzCxErPSG3rTqtHYkfokQxOtQJyX4ojCF7YEak6YwV%2FUwXXDP3vF%2F9IzGn0gw4GML29wskGOqUB2uhHmZJvZpqrnlRiaItN4qOUWNIuRQGEBCOkeES3c3z7GEZhn3sI6AYdHDmUGfO4KRHzagym5%2BHJGBKF5cwZTociTReNghNjrDLRJOvPff16nnAscr%2FSPKHcnrY43kExF1dENpMhBbNRXfCtrY9FEuQgjD6tYB1Tg35QZ2F%2BjU9898kDuCCr8agN4ccHk3UJE4i1OlmkxjyHVc%2BRsL7jee3D3oud&X-Amz-Signature=39dd6a50ca415838abe95c13777f392cf29e93a1d9dc68e236b05deace023f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

