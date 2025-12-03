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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O47H2D3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCsYVoCCybRgzsSpYYrtiCZ9mIr%2F5WPKm9S1DWY0Jl7vgIhAJSYhC9zD4FW8Jh5fCwjtpQprXuJPQGZXw8QRIoBVHqqKv8DCCwQABoMNjM3NDIzMTgzODA1IgzjDgh98NK0OgxlRm0q3APvM8CK1lgUHYRoFPMitlJAjQPGmCZm01PYso6KjANvEB4ZUIgtZpQHPfX%2BxeNZleWXw8s2Rp8sVc%2B6YOSkZtCA0JbtpmOOBOehSNA5GuzrbSu766ApMy8zVVVvPQvPIsvqWaiHNXim%2By6XFvUwO81yc%2FnIU2sIRDXiuyc4PvszgnFbQjAQKrh0nsvTdfp%2BzjbA5xdM66j81mgOZmVT9KB8LlfPy8iLdhPA%2Bk6l4KVgQyeOBzjpSkCXn%2FZSkcdjVS5puxOnJwZekpGpYQ%2B8LEQsyu83Wg%2Fz6NAARDCtZRNfnl6ZYoYl48D%2FgUFcmT6y05rcENLsdGefDHQeb5ETTtdxUxlUDcTNWftjAjAvY4lxYHpDtHTXAPEFjJ%2FWGM0zBKkejhJrsD6U835yiqiGwf5PcPZWw8Q3KIG5QimChLl%2B1Enwhwh%2FyafULHq5QsVHj%2BLIUmBz9Fq6vcGmfDhExDDYJWIR%2FPW6RAAWY%2FDenR7dV2YmsoXmsZC3q6FyelWYkdrZZT40%2F2%2FtzIGgT2gz2cOdTlatJPiziO8aGb5mfihBI%2Bl2SdpAFsYXbNEKfWJTmWGTon%2FDtvttUZKLHkQm3WlheTRsipoXy3XoTra%2FA%2BNfCsmDX4P0T8mmGUfqDjDfrsDJBjqkAcCPdKuFpT8%2FpWg7lBzBZ51PrTxXpREeFQ6wEJ3PNcAzZU%2BYUCfohz57kS0CdV%2BvfXSan3tK%2FNR7xJ7LB5KbUMO5tCaNivKfugobW14IWCl9yGrJTLUktlF6vHIRl7jxfUEdfkqOxUTmeIFO%2F4JhYA9RPjErNwLmZVuv2E0glHYILww4g7r3IWdj1Qcb3XMvnSqW4%2F7DxBDTaMduxOrgqbD%2BWOZI&X-Amz-Signature=4411e5e4803463f3413960a2b70943d8702a43594ce4d1cc7a417e7764dc7942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O47H2D3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCsYVoCCybRgzsSpYYrtiCZ9mIr%2F5WPKm9S1DWY0Jl7vgIhAJSYhC9zD4FW8Jh5fCwjtpQprXuJPQGZXw8QRIoBVHqqKv8DCCwQABoMNjM3NDIzMTgzODA1IgzjDgh98NK0OgxlRm0q3APvM8CK1lgUHYRoFPMitlJAjQPGmCZm01PYso6KjANvEB4ZUIgtZpQHPfX%2BxeNZleWXw8s2Rp8sVc%2B6YOSkZtCA0JbtpmOOBOehSNA5GuzrbSu766ApMy8zVVVvPQvPIsvqWaiHNXim%2By6XFvUwO81yc%2FnIU2sIRDXiuyc4PvszgnFbQjAQKrh0nsvTdfp%2BzjbA5xdM66j81mgOZmVT9KB8LlfPy8iLdhPA%2Bk6l4KVgQyeOBzjpSkCXn%2FZSkcdjVS5puxOnJwZekpGpYQ%2B8LEQsyu83Wg%2Fz6NAARDCtZRNfnl6ZYoYl48D%2FgUFcmT6y05rcENLsdGefDHQeb5ETTtdxUxlUDcTNWftjAjAvY4lxYHpDtHTXAPEFjJ%2FWGM0zBKkejhJrsD6U835yiqiGwf5PcPZWw8Q3KIG5QimChLl%2B1Enwhwh%2FyafULHq5QsVHj%2BLIUmBz9Fq6vcGmfDhExDDYJWIR%2FPW6RAAWY%2FDenR7dV2YmsoXmsZC3q6FyelWYkdrZZT40%2F2%2FtzIGgT2gz2cOdTlatJPiziO8aGb5mfihBI%2Bl2SdpAFsYXbNEKfWJTmWGTon%2FDtvttUZKLHkQm3WlheTRsipoXy3XoTra%2FA%2BNfCsmDX4P0T8mmGUfqDjDfrsDJBjqkAcCPdKuFpT8%2FpWg7lBzBZ51PrTxXpREeFQ6wEJ3PNcAzZU%2BYUCfohz57kS0CdV%2BvfXSan3tK%2FNR7xJ7LB5KbUMO5tCaNivKfugobW14IWCl9yGrJTLUktlF6vHIRl7jxfUEdfkqOxUTmeIFO%2F4JhYA9RPjErNwLmZVuv2E0glHYILww4g7r3IWdj1Qcb3XMvnSqW4%2F7DxBDTaMduxOrgqbD%2BWOZI&X-Amz-Signature=d1919249ee06729bc0e259552f09c77601bf4c45a2426cd9ef72e2ef47cc2f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

