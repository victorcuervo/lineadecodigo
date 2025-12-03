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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KXQRUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBvAZiU0wkEEmNVr9bY%2BrU%2FbXHhlkP4QFtnYPVBcMYcgAiAiUBnDsAwu3QFeVo8r1xXURAmqtaZp%2Fuv%2BCCfGVNzOoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMixDDg%2BRVOMWcOUHnKtwD1rgU56fPfIGDxnkzu8I1vGoBoNiRl6lch5wmLSkwUTdu1cdIQDBPGud0isxFnknwPWvqcNlvXUXWy9LMFKstb8CQ28Aj4JFNxYgs6GIPfj%2BezNGlgQ1EfI5ZmZXwtPbn8dbpArbwYkPRaAo9ERb6Cyddx2oGKSAzuv0wL7AvIuXMys3hLJcSsMr4uRrzH5ldtftXAaiW1qnChrDj389PTb39E3uSQlcfdrHzAYyEQZ3Rn1bjkIDYZjY02bgmiZPUwhKoGqqmkWlPlp1m%2BzRK38%2Ff5xqXvdv1w%2FU4mEvhENhi3b%2FE7nTEG16GSDcnmxCWi0B6l3Ar6lrlAFVTNX0t24z9JCRbNP8zPNzUNKjUM001a7HKaJc8oG0Qm6aSF4gVOC7tFMWeViD9Z0fOys2SdOQ5pBTYIVcpUVeEmnMzjcmQEOLIjLCe9QOdxBra0g5vOHbcwgtp0tcj5%2Fmd%2BJqPQcCsHsRZtOUiYqAqVZzmbJxZX1Bhj7HLPnJcnXWwKPhVNmHPtugTRF8YrQkblpENTHE3YMM9vVFCJOAWXEXrX7A19nMC0vOkVqgQwOrLFaRcN1V43WddPh%2B0nVWehR8IgsVYNcaxW8lVP1%2FFk7iFKQwgRpq6kKkx2c90ThIw5sDByQY6pgF8Tty7B3XWAO8NVTOhUhHWGGEjfSoPTTCxuoybMfg%2Br%2FA5jjgE5dsLbudJ6JrKgabYMEcjxDc%2B5hivk0VYbLDsCWDojWBDUfATR4W8hAQlo0rkWQi%2BhtzIt3Cc7g8paAG95hP%2BsshAvWGHV%2FmU7gCrvEvK2JAyNZ%2Bt4ZFYdNU5iP4foidnfymRQIRNQzTix4TbtnW18J58c1jTjTKHM0dJ6CSdc2zq&X-Amz-Signature=dbfff8a288dc705039d9aa92fb7491b000cbe05b5991504756d2e10c9c8e8681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KXQRUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBvAZiU0wkEEmNVr9bY%2BrU%2FbXHhlkP4QFtnYPVBcMYcgAiAiUBnDsAwu3QFeVo8r1xXURAmqtaZp%2Fuv%2BCCfGVNzOoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMixDDg%2BRVOMWcOUHnKtwD1rgU56fPfIGDxnkzu8I1vGoBoNiRl6lch5wmLSkwUTdu1cdIQDBPGud0isxFnknwPWvqcNlvXUXWy9LMFKstb8CQ28Aj4JFNxYgs6GIPfj%2BezNGlgQ1EfI5ZmZXwtPbn8dbpArbwYkPRaAo9ERb6Cyddx2oGKSAzuv0wL7AvIuXMys3hLJcSsMr4uRrzH5ldtftXAaiW1qnChrDj389PTb39E3uSQlcfdrHzAYyEQZ3Rn1bjkIDYZjY02bgmiZPUwhKoGqqmkWlPlp1m%2BzRK38%2Ff5xqXvdv1w%2FU4mEvhENhi3b%2FE7nTEG16GSDcnmxCWi0B6l3Ar6lrlAFVTNX0t24z9JCRbNP8zPNzUNKjUM001a7HKaJc8oG0Qm6aSF4gVOC7tFMWeViD9Z0fOys2SdOQ5pBTYIVcpUVeEmnMzjcmQEOLIjLCe9QOdxBra0g5vOHbcwgtp0tcj5%2Fmd%2BJqPQcCsHsRZtOUiYqAqVZzmbJxZX1Bhj7HLPnJcnXWwKPhVNmHPtugTRF8YrQkblpENTHE3YMM9vVFCJOAWXEXrX7A19nMC0vOkVqgQwOrLFaRcN1V43WddPh%2B0nVWehR8IgsVYNcaxW8lVP1%2FFk7iFKQwgRpq6kKkx2c90ThIw5sDByQY6pgF8Tty7B3XWAO8NVTOhUhHWGGEjfSoPTTCxuoybMfg%2Br%2FA5jjgE5dsLbudJ6JrKgabYMEcjxDc%2B5hivk0VYbLDsCWDojWBDUfATR4W8hAQlo0rkWQi%2BhtzIt3Cc7g8paAG95hP%2BsshAvWGHV%2FmU7gCrvEvK2JAyNZ%2Bt4ZFYdNU5iP4foidnfymRQIRNQzTix4TbtnW18J58c1jTjTKHM0dJ6CSdc2zq&X-Amz-Signature=49d2c5159e278cce3ae58982fe1ea949ae76c75239a8977a0a3097dec7a36133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

