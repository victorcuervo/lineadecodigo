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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5ZWJAK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH4c1g6A2Fco1tgOfnqhYUOF1HJQZ%2FWTdRFE4LYeJBqlAiEAhGdRXM64XbflR00eTlWuRYHtQULsBsG%2FJcC8JQF3zMgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJnVJpzFaO87fY3TVyrcA0INbMCSN92Qz7k9jO4ubuxACqVzZGBNBsos%2FbRsE1enaVjGBVZ06UBK9rCRIymoEIAjYEV7mD0QiyCKzenpmiejI%2Bq3jY%2FExhyOmjUTY5WGFF3%2FwybBxb4G8z4bla8B7aXjae29UOe8rW8OacocpRYBRYh59QNF9Nddelq6qaac3q1JLX8lBnO8tqSHZPa9IyJMXtiqf%2BBozFaqbIDYMD1G6s%2B%2BCp8iGJjdfoAZvWWRCwiqgpAorDWUWIGv7yGVF5D3M0genR13Q1ufQV1grfNs6KnwgdETN3ecP5mrOnb5Z4VoeI%2BvrKyXD%2BAkWNKC2l933GytNLYnurtF4%2FTJ9FlX4ItI38x7Zf7zg4ngy9m0SYHwr6zoRlc2HieLsQ91IBlR8fmFLW%2B%2FTbnylf4RBhyK4xWBXLywka51ST9Anh1SS%2Fw3DBL9%2BB604%2FhzaGoafCk7IVMfbK9TrGRXZDEn8cesp1AEjcKv8jHe3EScRxY54BaRqJbtS3tCI9Lr7XpOk6b3bOIuGsTDJfVH62KxtJggEsH4Prk%2FwmN4%2F1SpQF3HbGWhMYkNk61I7%2FW2QjGfxz8l4ycnRKuEc%2B7v25a4M%2FXEG3fPdJpj6m%2FiEZG3RG8UZoLd5uDhfa8dIEKwMJCHwckGOqUBOLOvN2v%2BAH8BSnplKuGz8ovpOT%2BV1pskfzA5IRwr9I%2BWtnk%2Fo6JI8aUaiz7u7%2FG3T2slD91%2FHmMlR%2FBgja0qsdhV5RJq229CQs1cbEGGdwEJhdzzEC7XJkDDYhHovjd3DM%2BYJSMcyhwPiLy9rG3m7%2FDTgy%2BYzBpGjH9ncKDeWW3dNNbI%2BiCeOMiEsWc3NW7o%2FTtLoV24k%2BCjV%2FJEwEbF1%2FeTw7AG&X-Amz-Signature=fb5130b0d90db143b349c5dc5a2d10d9cd8cdc118832a21ae3690cf2d7f574e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5ZWJAK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH4c1g6A2Fco1tgOfnqhYUOF1HJQZ%2FWTdRFE4LYeJBqlAiEAhGdRXM64XbflR00eTlWuRYHtQULsBsG%2FJcC8JQF3zMgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJnVJpzFaO87fY3TVyrcA0INbMCSN92Qz7k9jO4ubuxACqVzZGBNBsos%2FbRsE1enaVjGBVZ06UBK9rCRIymoEIAjYEV7mD0QiyCKzenpmiejI%2Bq3jY%2FExhyOmjUTY5WGFF3%2FwybBxb4G8z4bla8B7aXjae29UOe8rW8OacocpRYBRYh59QNF9Nddelq6qaac3q1JLX8lBnO8tqSHZPa9IyJMXtiqf%2BBozFaqbIDYMD1G6s%2B%2BCp8iGJjdfoAZvWWRCwiqgpAorDWUWIGv7yGVF5D3M0genR13Q1ufQV1grfNs6KnwgdETN3ecP5mrOnb5Z4VoeI%2BvrKyXD%2BAkWNKC2l933GytNLYnurtF4%2FTJ9FlX4ItI38x7Zf7zg4ngy9m0SYHwr6zoRlc2HieLsQ91IBlR8fmFLW%2B%2FTbnylf4RBhyK4xWBXLywka51ST9Anh1SS%2Fw3DBL9%2BB604%2FhzaGoafCk7IVMfbK9TrGRXZDEn8cesp1AEjcKv8jHe3EScRxY54BaRqJbtS3tCI9Lr7XpOk6b3bOIuGsTDJfVH62KxtJggEsH4Prk%2FwmN4%2F1SpQF3HbGWhMYkNk61I7%2FW2QjGfxz8l4ycnRKuEc%2B7v25a4M%2FXEG3fPdJpj6m%2FiEZG3RG8UZoLd5uDhfa8dIEKwMJCHwckGOqUBOLOvN2v%2BAH8BSnplKuGz8ovpOT%2BV1pskfzA5IRwr9I%2BWtnk%2Fo6JI8aUaiz7u7%2FG3T2slD91%2FHmMlR%2FBgja0qsdhV5RJq229CQs1cbEGGdwEJhdzzEC7XJkDDYhHovjd3DM%2BYJSMcyhwPiLy9rG3m7%2FDTgy%2BYzBpGjH9ncKDeWW3dNNbI%2BiCeOMiEsWc3NW7o%2FTtLoV24k%2BCjV%2FJEwEbF1%2FeTw7AG&X-Amz-Signature=a963ec90405b42309a15302b737facf671d1cb6be783163b288f4c8c6c726c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

