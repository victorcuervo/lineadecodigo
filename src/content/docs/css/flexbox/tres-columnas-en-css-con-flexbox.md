---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V4ZFKKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhGs2I5EnCilBNcRN8XpSLSmSUM3Ve3nn6IKUPdHcpAIgOvAFjNMI0jjttlrZIrSYGDrzMH3nockFFGN8TA7%2Fc6Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJAFPrcXbFbGhoxYRSrcA5jE1ilZZSnLWyfDenS5t%2FXWGFPrFPc%2Bc%2FY%2FXTuyCQBhDkOh147MfN%2BU0oi%2FpCiUBhg9msB3R%2FGdTxMCiSI%2BFdjUj2a6lKPRcdyATPUV0VIpaFJRgBXZwr1fG47E6omcpgpj7O%2B5%2FWaQB8fvwWcC5%2BqPSr18vCSTjIUiuHVJZz8TpjoPmkXLwe8ZEGmYh8C8Fw%2FeVafeXdITLDAbX2DW91VAQiera5kVaTEBRVO2fCTik5ZuJw0uU%2FtqiSjG%2FRXUkVGYxC6Ul0Juot9VmXK2hdg4utmOwwQFbx5WLXNYJds8wdMYL9VwD4%2BUDF%2BlRk0P0vkUne%2BJ7QdNAI3ZLylABOVPSS2ypJxb0Mpx2Pp4jjf4JdBCS32YHpwOPXVuMMwv3HrwbhMKoCt8wiAD%2FxcexRS4YfKHrBxOZ0TsBC7O%2BtTViNP1FFqGsYSZ9UXa3t4NtcxnduceoW05t%2Fb1TLzJ47XGx4YaGI4iJUwM67F%2FoLDbjk9WGKzTwyo6oSHUtdu5m9ziNs4jrQm0ZRSGysehxtAPi39zAxiCHeQoYiJnUJq5JwHutrE%2BFqV86eVfYyp%2B67Q9QyeMb1w%2Brv7ffl%2Ft%2F7sGlAROM2db2thZNzFCwbF8J272G7zG05U7Gt8oMIzT0skGOqUBvapyU3U3YBZHOGUKB971kiw7eIDBbJyiqgPIHLbCe8705KqFd%2FzVYCIwyWscEmY5o8%2FAPdJ%2BKchO2aBfCRNYobsIGwlxhvw3a%2BDhlBau%2BhV3ixB7DdY3m5peXaLpbG1ymQXDX%2FApOwb%2Bnljhg3v%2B5OfpzWEbFB0o0LChdXmbEgKYBpAgg0KgG%2FAX6y9Jbioa%2BRM3oG3GX07jwrpLEmqWAx0IW4TJ&X-Amz-Signature=03da4fa0a2c9ee97edb06761726266c1796dff9998c3f861c77bd3d1dbff43af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V4ZFKKX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T224249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BhGs2I5EnCilBNcRN8XpSLSmSUM3Ve3nn6IKUPdHcpAIgOvAFjNMI0jjttlrZIrSYGDrzMH3nockFFGN8TA7%2Fc6Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJAFPrcXbFbGhoxYRSrcA5jE1ilZZSnLWyfDenS5t%2FXWGFPrFPc%2Bc%2FY%2FXTuyCQBhDkOh147MfN%2BU0oi%2FpCiUBhg9msB3R%2FGdTxMCiSI%2BFdjUj2a6lKPRcdyATPUV0VIpaFJRgBXZwr1fG47E6omcpgpj7O%2B5%2FWaQB8fvwWcC5%2BqPSr18vCSTjIUiuHVJZz8TpjoPmkXLwe8ZEGmYh8C8Fw%2FeVafeXdITLDAbX2DW91VAQiera5kVaTEBRVO2fCTik5ZuJw0uU%2FtqiSjG%2FRXUkVGYxC6Ul0Juot9VmXK2hdg4utmOwwQFbx5WLXNYJds8wdMYL9VwD4%2BUDF%2BlRk0P0vkUne%2BJ7QdNAI3ZLylABOVPSS2ypJxb0Mpx2Pp4jjf4JdBCS32YHpwOPXVuMMwv3HrwbhMKoCt8wiAD%2FxcexRS4YfKHrBxOZ0TsBC7O%2BtTViNP1FFqGsYSZ9UXa3t4NtcxnduceoW05t%2Fb1TLzJ47XGx4YaGI4iJUwM67F%2FoLDbjk9WGKzTwyo6oSHUtdu5m9ziNs4jrQm0ZRSGysehxtAPi39zAxiCHeQoYiJnUJq5JwHutrE%2BFqV86eVfYyp%2B67Q9QyeMb1w%2Brv7ffl%2Ft%2F7sGlAROM2db2thZNzFCwbF8J272G7zG05U7Gt8oMIzT0skGOqUBvapyU3U3YBZHOGUKB971kiw7eIDBbJyiqgPIHLbCe8705KqFd%2FzVYCIwyWscEmY5o8%2FAPdJ%2BKchO2aBfCRNYobsIGwlxhvw3a%2BDhlBau%2BhV3ixB7DdY3m5peXaLpbG1ymQXDX%2FApOwb%2Bnljhg3v%2B5OfpzWEbFB0o0LChdXmbEgKYBpAgg0KgG%2FAX6y9Jbioa%2BRM3oG3GX07jwrpLEmqWAx0IW4TJ&X-Amz-Signature=271c1d070ef6322c078e65f103caaf8437879b3f2065b9a18bdbea024cfca0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

