---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2D3F3H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo0shTeKJ33hCRr0QXCTOBjszb4zjhFzEgRqr0Dd7wZAiEAp57V5a%2BSSCUbb1vqrNi0%2BOaqQ3UCTh8PiPIJFpJOFcwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKvRFxCBF4n27La8fircAy32INoWcjQLRSwfL4iEOWlRoxIFOLwQs4N5YU95LFvJCZ8g%2Fj8ZIQQu574LbaZ1AuuBhX3kDw636l9ZZprNBDn6qBcfEPPeiKxTVGu0Ab1nG8nKIWvV4KwafwXmIzswuLWxJTiKYlXtyDdr%2B%2FuJYDK2iAXrfLoOELYQjC7icJeNIHKCF8ZOiAAUvOaTypNwzuJtmfhRkuXqboxUtbW9adGKS5iBZhNOkIGHfavH1xurucUjr7ko%2FxBZMFWjY5MjfMlo5e6zkTC%2B5vWpBKSOerN%2FvFTsvnnjUpvLZZ2tGBzIKah6zbX5r91pReq4%2FCVkobhCs%2BxuUP%2Fj%2FWNgYPe%2F7BrDRhc4zawTAbo8ZmRTIlMJQjOA%2FuVwsDU6rK6R7rcvlc51Ne7kxGkqPnn7OoG8q0BYbUlCIZxH%2BaDdmoOX6hi4jll5oOcEqDxWmIBpj4m463N3B%2BV2HCRGuaAZZ1hdE4ZnREhVwyIEBwcAirVean4JAgkyurVxIMcbK%2BfC0ZL8CNMS42%2FEQ36CuupFwrDlqV9PrufmIa5SC2PEJrbxOBqepvw0Ni715Fs%2BAoj30ZVemre%2B8dXlfvoL1CBcJXz%2F0d9WcqVSccMqhNmbgZRLS2vdMtd5KxJMCS7SMyuwMNTGzckGOqUBCYDIZ3JHPfFksJuLfnIf3%2FqG4iR6qdO%2BwCVOrIabEQKT%2FTfAseaed43lk6GAMd4oDtFsp1ptcxkQPgEPPC0J8Tv7vCh5%2FwHnH1IlpprRbhTWiqnq75tW9XqKx5vcAHOientXzmG0D75Ily%2FTKSKzVZInPDFVJSnFP%2BarnIu2meGSvqXSgkqcrlj4zYGoHVD36wRPvSJL4U2aC1TzNLjKunn3lXmY&X-Amz-Signature=53408e0175cbf0e25eba51e587a9e5d74bb726574f76d3f9e8eda6c0be13bf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2D3F3H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo0shTeKJ33hCRr0QXCTOBjszb4zjhFzEgRqr0Dd7wZAiEAp57V5a%2BSSCUbb1vqrNi0%2BOaqQ3UCTh8PiPIJFpJOFcwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKvRFxCBF4n27La8fircAy32INoWcjQLRSwfL4iEOWlRoxIFOLwQs4N5YU95LFvJCZ8g%2Fj8ZIQQu574LbaZ1AuuBhX3kDw636l9ZZprNBDn6qBcfEPPeiKxTVGu0Ab1nG8nKIWvV4KwafwXmIzswuLWxJTiKYlXtyDdr%2B%2FuJYDK2iAXrfLoOELYQjC7icJeNIHKCF8ZOiAAUvOaTypNwzuJtmfhRkuXqboxUtbW9adGKS5iBZhNOkIGHfavH1xurucUjr7ko%2FxBZMFWjY5MjfMlo5e6zkTC%2B5vWpBKSOerN%2FvFTsvnnjUpvLZZ2tGBzIKah6zbX5r91pReq4%2FCVkobhCs%2BxuUP%2Fj%2FWNgYPe%2F7BrDRhc4zawTAbo8ZmRTIlMJQjOA%2FuVwsDU6rK6R7rcvlc51Ne7kxGkqPnn7OoG8q0BYbUlCIZxH%2BaDdmoOX6hi4jll5oOcEqDxWmIBpj4m463N3B%2BV2HCRGuaAZZ1hdE4ZnREhVwyIEBwcAirVean4JAgkyurVxIMcbK%2BfC0ZL8CNMS42%2FEQ36CuupFwrDlqV9PrufmIa5SC2PEJrbxOBqepvw0Ni715Fs%2BAoj30ZVemre%2B8dXlfvoL1CBcJXz%2F0d9WcqVSccMqhNmbgZRLS2vdMtd5KxJMCS7SMyuwMNTGzckGOqUBCYDIZ3JHPfFksJuLfnIf3%2FqG4iR6qdO%2BwCVOrIabEQKT%2FTfAseaed43lk6GAMd4oDtFsp1ptcxkQPgEPPC0J8Tv7vCh5%2FwHnH1IlpprRbhTWiqnq75tW9XqKx5vcAHOientXzmG0D75Ily%2FTKSKzVZInPDFVJSnFP%2BarnIu2meGSvqXSgkqcrlj4zYGoHVD36wRPvSJL4U2aC1TzNLjKunn3lXmY&X-Amz-Signature=e4128596d838f8eef3036d10ed00ba755e244c5c8f6cdf2205810153317ec5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

