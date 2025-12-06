---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKMRGEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMwWPr4XfWFK4CCReFrpzeYpbheCzSiDgz5EYOZ%2BPSogIgDKv6DI7BG%2FFakHjdLb6NRf3s85gbSuLaW7nRXkCeo3Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHZABWfN3CfM5lg8jCrcA30SbDDxZkNJsB%2FSwQgTu7qNZ6aBiu%2FzIaj1bd84D9WubBeYhtJ7gYIBiNQlp6oNYQVkLNSG2M7%2Fb4m9V09VSHWD1CW5t3Z53k%2BGlquryn8oLihIFQKrI3fU%2FC9NGwddoPpajr6ST448tCH3ztyGBfo0l8SAOqm2HFDRMrBz89OROhPOhf%2BwdvEXGNc7rgq65%2F2ZxZQlf1VaOM1R1LmJuC24Hk1lC5irdCfSclMSbGz%2BTnzq5w1%2Blkt%2BDRTYEzze%2F5SXNoWELYNL3taWRTbqaFt62RKOQErX3D17SdKMFVYW5xfs1RFrSDSajIqaNUd85RT42p9I5C9lHXaLSLyC5xMoLpkClZ9ZESk%2F4V9VtafJGSHoBXHfm3E51eSAWthCqi8Rgcx7Xil2pUXg22TLfeGlHBkBR99zm0OtmwYMXCYHw3LJWR%2BAN0ZhvywH6tk1yGicjCbLIEN98J7WtTbahf3mhv4V%2FdYTE1%2FSQNdpnKUYv5TguOpnpL1XHlntLUCktMIFcQcU5Ad%2F3OWudQkGtRGpFjuHcSL5fdicLRueikIbbWKhg7Iu%2FtVymL%2BzoyGkbTKprZYxWf6Dan20dIKo9KAeyBlQUefmxMI46iz7r7MLCIgIY63891N%2Bb97wMKLT0skGOqUBohZ0VTQ%2BUCmB2DNtaHSMySnx157jsJYviq89ytQ3z%2B2QS1IBqI1rOcjIytPhOzFjd%2FH%2Fw0RPoCt1fd9yuNYeWkFBSe8c%2BGcnFbebUGIQTYfCRyfa5%2BT1wr3zhYpewfaUDwigXlaCrKGN%2FFvQaCZsp0gqT7uhgBgF4ohEwWlaEsrwrk0QNAjn4a32TynWxFTaLhSxF3gJtwbL6QEvNGEGeCk6Xczp&X-Amz-Signature=3bfea26e5b760fccd6b6a2c831f190e57171f16e9918658a18ae0703ac64c628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKMRGEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T233141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMwWPr4XfWFK4CCReFrpzeYpbheCzSiDgz5EYOZ%2BPSogIgDKv6DI7BG%2FFakHjdLb6NRf3s85gbSuLaW7nRXkCeo3Uq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHZABWfN3CfM5lg8jCrcA30SbDDxZkNJsB%2FSwQgTu7qNZ6aBiu%2FzIaj1bd84D9WubBeYhtJ7gYIBiNQlp6oNYQVkLNSG2M7%2Fb4m9V09VSHWD1CW5t3Z53k%2BGlquryn8oLihIFQKrI3fU%2FC9NGwddoPpajr6ST448tCH3ztyGBfo0l8SAOqm2HFDRMrBz89OROhPOhf%2BwdvEXGNc7rgq65%2F2ZxZQlf1VaOM1R1LmJuC24Hk1lC5irdCfSclMSbGz%2BTnzq5w1%2Blkt%2BDRTYEzze%2F5SXNoWELYNL3taWRTbqaFt62RKOQErX3D17SdKMFVYW5xfs1RFrSDSajIqaNUd85RT42p9I5C9lHXaLSLyC5xMoLpkClZ9ZESk%2F4V9VtafJGSHoBXHfm3E51eSAWthCqi8Rgcx7Xil2pUXg22TLfeGlHBkBR99zm0OtmwYMXCYHw3LJWR%2BAN0ZhvywH6tk1yGicjCbLIEN98J7WtTbahf3mhv4V%2FdYTE1%2FSQNdpnKUYv5TguOpnpL1XHlntLUCktMIFcQcU5Ad%2F3OWudQkGtRGpFjuHcSL5fdicLRueikIbbWKhg7Iu%2FtVymL%2BzoyGkbTKprZYxWf6Dan20dIKo9KAeyBlQUefmxMI46iz7r7MLCIgIY63891N%2Bb97wMKLT0skGOqUBohZ0VTQ%2BUCmB2DNtaHSMySnx157jsJYviq89ytQ3z%2B2QS1IBqI1rOcjIytPhOzFjd%2FH%2Fw0RPoCt1fd9yuNYeWkFBSe8c%2BGcnFbebUGIQTYfCRyfa5%2BT1wr3zhYpewfaUDwigXlaCrKGN%2FFvQaCZsp0gqT7uhgBgF4ohEwWlaEsrwrk0QNAjn4a32TynWxFTaLhSxF3gJtwbL6QEvNGEGeCk6Xczp&X-Amz-Signature=9c4531bb0081472780a83a360e996f564beaff4ef72850a06276e0aa2430ca25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

