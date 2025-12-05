---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFJCMLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk6SttyHgW1iFvKP7yxi7slDoyaYPKUN8A2rwn7hn3%2FAiAqH9XpdKlWVvbUxJmNgEcLfmYcitMUo%2BCGE6gLvTSeXSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdJQeFEqw%2Ftlpnz7DKtwD1TBE9fmYAwlTbL82fc0Dwe9%2B0EmFWMJKBd49A27ZseL1O%2FcyRIKovEaVWcwDC6aH7iV1Z7kGSBZisKK8BBuM%2FLkm8apNibM1XYTKU1CYSCOPjkqB0RQ%2BhlKh6GFQ7dBJtMHFslMYYAdogmBCQqHcjMzJm5zx%2B1WoAn4z%2FXijVin%2Fb5jBCpwnmujKOVJH4IF62%2F43Ee0XiTP0jglLPgsSyqTYls64QUOQlQllKWtvdUgCSw6J9xiXaBIyFMdYXOhPkXP7Lo6xTduEBb5ZNBJ8Q0hj1Tf%2BGzZNBSyB0xe6haXbQcX7XBbslveWet36ZhgzDPP07IYvpauO2wkfC%2BLsbLLKGCp1%2FGbO1mNDUDAh8J1Lwb%2BjU1h9u4ApvKWvqyM2H7ZSmETA5bpcR2r1DB%2F5V5FXdbZ9QtM%2F8yqgI4xDhXHQJiLcCnnVnUfBvsmkEG23bOMDc1ulA1jagyte7nu7Ln7pLbBg2vxh8ymm%2Bwl5SqoyG0AmMIAqmzBtdP83fC30DM6r6xViIyPDIyW7txZBi9hlabqxRfMzWW9vMSvmehymwC8mSo1QPQrgab8jpLKhUPOoyTE8z3RF4gI134FPt%2BSCl%2Fr4xNvF2DI%2BV0H%2Fubsu%2F%2BySm%2FZxEsXfJHcw56rJyQY6pgFDO1RWNFXoLvvYJDv67mP8b974PmAlwGKmH%2BvHVn1OBNDL8gu4XrqwX0vvNCLHMZmoGLV4vxJ4N%2BysmKCjqQWtjm6nxIF5I6vjCsKMn%2BHXvB947zKnmGgvepbpDj5jLr2wCF2tQF84MaFy2tMov3op5w8ieH1IiRxF42mZobR%2FjtOux7xkbHEDDCZzl70gmGNXLi%2BFyoc7CDYR48crD0VRDPo8mYwE&X-Amz-Signature=b86cd20f16220914135c691dd2dfd9a8d7cfa9090fc91b3b869cf52c97a0f1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFJCMLG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEk6SttyHgW1iFvKP7yxi7slDoyaYPKUN8A2rwn7hn3%2FAiAqH9XpdKlWVvbUxJmNgEcLfmYcitMUo%2BCGE6gLvTSeXSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMdJQeFEqw%2Ftlpnz7DKtwD1TBE9fmYAwlTbL82fc0Dwe9%2B0EmFWMJKBd49A27ZseL1O%2FcyRIKovEaVWcwDC6aH7iV1Z7kGSBZisKK8BBuM%2FLkm8apNibM1XYTKU1CYSCOPjkqB0RQ%2BhlKh6GFQ7dBJtMHFslMYYAdogmBCQqHcjMzJm5zx%2B1WoAn4z%2FXijVin%2Fb5jBCpwnmujKOVJH4IF62%2F43Ee0XiTP0jglLPgsSyqTYls64QUOQlQllKWtvdUgCSw6J9xiXaBIyFMdYXOhPkXP7Lo6xTduEBb5ZNBJ8Q0hj1Tf%2BGzZNBSyB0xe6haXbQcX7XBbslveWet36ZhgzDPP07IYvpauO2wkfC%2BLsbLLKGCp1%2FGbO1mNDUDAh8J1Lwb%2BjU1h9u4ApvKWvqyM2H7ZSmETA5bpcR2r1DB%2F5V5FXdbZ9QtM%2F8yqgI4xDhXHQJiLcCnnVnUfBvsmkEG23bOMDc1ulA1jagyte7nu7Ln7pLbBg2vxh8ymm%2Bwl5SqoyG0AmMIAqmzBtdP83fC30DM6r6xViIyPDIyW7txZBi9hlabqxRfMzWW9vMSvmehymwC8mSo1QPQrgab8jpLKhUPOoyTE8z3RF4gI134FPt%2BSCl%2Fr4xNvF2DI%2BV0H%2Fubsu%2F%2BySm%2FZxEsXfJHcw56rJyQY6pgFDO1RWNFXoLvvYJDv67mP8b974PmAlwGKmH%2BvHVn1OBNDL8gu4XrqwX0vvNCLHMZmoGLV4vxJ4N%2BysmKCjqQWtjm6nxIF5I6vjCsKMn%2BHXvB947zKnmGgvepbpDj5jLr2wCF2tQF84MaFy2tMov3op5w8ieH1IiRxF42mZobR%2FjtOux7xkbHEDDCZzl70gmGNXLi%2BFyoc7CDYR48crD0VRDPo8mYwE&X-Amz-Signature=abd689551f445fe03eb86a1759f1f69cc0090199b6b0eebdd3a1c798fc54db64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

