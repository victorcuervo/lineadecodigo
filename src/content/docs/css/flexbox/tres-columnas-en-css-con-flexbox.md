---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LV2BJDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdvlNm5jQRMvaKrUztu6JxtA%2BYQ%2Fab2fxxz7mvHecE0AiAp6nE%2BW1wQMIRyitQKWSPrjHD1896FuMiNtGjBmFRaXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI%2F2dVn6sQLzco9xKtwDnDpAtF%2BloxB2gxBawQtcsYF9KCQvriF9OTVmBY4EqTR2X%2BSpqMmUWlQEg8yGnaQkT2tNE6XQUsC%2FHyxiCvtl46m8l0tULswgeMJvMN1llmGjDjHYt3PlOHpWlxHolellPEZn%2BgEDKX2ZW8gRRMcVPBXIBgKcmQIAWUc2GRhTeFja%2BCuwx4wno5OFYJViHX2bv2kPMYLOiyTbqCIhsi3PW5H7iZAUAG9tjulXV%2BkFGNxn7NA8XI5%2FfV0e0RY4iagYPZF8Wvbc5Kd8HdZFC6XeOvftXh8QzjD%2BF8A0mpyoexWAYn%2F5s7GUpB55a%2FqBl5I5DntzxMNRaOplgOP8CfJgz%2BV%2FvoW%2FM0GCcoCQIcWHeXxg8%2BmEko0XcUVqhc0vhbH6hhtzFbtuGA5cbElRDfCGGjH8FYg3wgf8LYWf7fZ2FSgwGA8fKNRa%2FfvV%2FJFyLjlZIvDrs6mDjzyL8ltwZAEdvB2aFjm5a6BXwdMC3ak4DmTGkMiWDwUtHSLaPVuW9FnUdXo4pH%2F55nVYhvgbDDQQGpvg8qjdIw5Ko4NU3hbrwPHTvYxOFLaUoPTBTeX%2FFvb48OjwB4MmVMqJ3x89WcPNmoXffBaFoXfm29DrwUdcx5Y%2BvDr%2FjZ7WzspSMc0wrZnVyQY6pgFIlfeR%2BgbX7ky%2Fut4CU7sBrpF9XM%2BOxhHZkMf5zETrKEPxf1X591S0vv54QOwHYkgvg7NMVTCT6U1Xdc8oO04oAUusJENOIfn27tI1RAXBSRKZad0UMEp3kFgVcPKQ%2Fy0eMWKO4t3eDeAa1rQltqVOvwXUhhP%2BiEuWvOVtEhJ8C7%2B8h1%2B6oFrpxaiqHCszA0OUqZtFt6tBxWrj67gIEqW6jZqJRUPu&X-Amz-Signature=ae51d794fbc75235805adbb04b3e4f236b23deb22c06efcef84e1d449e7b8341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LV2BJDQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdvlNm5jQRMvaKrUztu6JxtA%2BYQ%2Fab2fxxz7mvHecE0AiAp6nE%2BW1wQMIRyitQKWSPrjHD1896FuMiNtGjBmFRaXCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyI%2F2dVn6sQLzco9xKtwDnDpAtF%2BloxB2gxBawQtcsYF9KCQvriF9OTVmBY4EqTR2X%2BSpqMmUWlQEg8yGnaQkT2tNE6XQUsC%2FHyxiCvtl46m8l0tULswgeMJvMN1llmGjDjHYt3PlOHpWlxHolellPEZn%2BgEDKX2ZW8gRRMcVPBXIBgKcmQIAWUc2GRhTeFja%2BCuwx4wno5OFYJViHX2bv2kPMYLOiyTbqCIhsi3PW5H7iZAUAG9tjulXV%2BkFGNxn7NA8XI5%2FfV0e0RY4iagYPZF8Wvbc5Kd8HdZFC6XeOvftXh8QzjD%2BF8A0mpyoexWAYn%2F5s7GUpB55a%2FqBl5I5DntzxMNRaOplgOP8CfJgz%2BV%2FvoW%2FM0GCcoCQIcWHeXxg8%2BmEko0XcUVqhc0vhbH6hhtzFbtuGA5cbElRDfCGGjH8FYg3wgf8LYWf7fZ2FSgwGA8fKNRa%2FfvV%2FJFyLjlZIvDrs6mDjzyL8ltwZAEdvB2aFjm5a6BXwdMC3ak4DmTGkMiWDwUtHSLaPVuW9FnUdXo4pH%2F55nVYhvgbDDQQGpvg8qjdIw5Ko4NU3hbrwPHTvYxOFLaUoPTBTeX%2FFvb48OjwB4MmVMqJ3x89WcPNmoXffBaFoXfm29DrwUdcx5Y%2BvDr%2FjZ7WzspSMc0wrZnVyQY6pgFIlfeR%2BgbX7ky%2Fut4CU7sBrpF9XM%2BOxhHZkMf5zETrKEPxf1X591S0vv54QOwHYkgvg7NMVTCT6U1Xdc8oO04oAUusJENOIfn27tI1RAXBSRKZad0UMEp3kFgVcPKQ%2Fy0eMWKO4t3eDeAa1rQltqVOvwXUhhP%2BiEuWvOVtEhJ8C7%2B8h1%2B6oFrpxaiqHCszA0OUqZtFt6tBxWrj67gIEqW6jZqJRUPu&X-Amz-Signature=b6b5649cc98bb6f93490ccbd874555cde0231e2dd4e81dcc6e51986c35bb81da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

