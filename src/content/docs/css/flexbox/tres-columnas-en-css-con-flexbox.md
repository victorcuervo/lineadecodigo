---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHEUOEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDteqJVAmcZqNbgiTcjz9y6FQ1KXFDC%2B8r0swXcge5f6AiBHG1zH15o%2F2YSsdSMNmQ5QBhaXwk3OtxY7O26XB99ooir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkRNMXxwzIjdQhxWCKtwDnigEbim86N1UiBNfu6xcjMEWK2vynG7ktENmyu2tUO0gnD9pB%2FGRrkDg0nvvuEhh3WRkSa8cujdgYZQVDv3p8z9kIHWI5qn%2FJZJX90LOOPuudFeZMuw%2FLejmiaZbB%2BLKjoBwinFjunuTD4Aohj6lOVFrf4%2BYnd5VvlWKo4ywr4ju9LpZ5sXBsU1Mh19looVlWacRo8392imvLlpOPLSggnG6l8cOnj%2FLRgNV%2FiWsuygqO2NquR8yakQELzKEPwmMnE%2FVMtU8%2BHHj2i7Wqz0YJSlfxMNYSUx%2BhzStTaBrA%2FAQbHHyGstG0yFtAMgpq82E5IyofxRguGbVn234Ua%2F2Z7f%2BFW%2FGvlrbDG05MIgzkZFFQ7ZsLRIAUb5o2npe9EOYuJZVgOimFxnXucLyAS2dBLW9PS8uiGNU4jyrNDNkeNC6X0npzWtkgbxxBK6L9d%2BIYufAI7yamnQV797q3SWTkiNRxj96m3qu77RIDQuXBkNPAw2oPDt8BAwhQQ9oKvmdIrZeOxiJnny67vKXb5IIMpfG87DSJASDmHjsJYzMsO3jNjCJQLozAId9x35bCvpYWOxst9yvbJSejgw5pq5xzFinv7eIW%2B4iwrp3L3uwmTIQ4SNKweopjMlOe30wnJDEyQY6pgFnqMFWUlE5Onik8seWr1N1YAmBKRb1T0ujfRfRCcAQS%2BKyG7OSQiJ3BW02Q2uf%2B%2FYS6ku%2FlG6T3TObBjUufTrA3ntLm9Y%2BO2AWnH60nZW%2FjgvHEIIjUcCthk7Viq9xRc8jmRRqSqcZycdDzyEgrWYAQAzIoUZX78Ay%2BrZo11Ij9HVk9BrE1WcGWhXrCPz%2Fnm7nvA1Cmx4%2FUfrlGvXRsHJpX%2F0CIAR%2B&X-Amz-Signature=cdba4c29182f9dab858b0a847d88c95a6afdc1251bf1b93f328502742ec9f8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHEUOEQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDteqJVAmcZqNbgiTcjz9y6FQ1KXFDC%2B8r0swXcge5f6AiBHG1zH15o%2F2YSsdSMNmQ5QBhaXwk3OtxY7O26XB99ooir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkRNMXxwzIjdQhxWCKtwDnigEbim86N1UiBNfu6xcjMEWK2vynG7ktENmyu2tUO0gnD9pB%2FGRrkDg0nvvuEhh3WRkSa8cujdgYZQVDv3p8z9kIHWI5qn%2FJZJX90LOOPuudFeZMuw%2FLejmiaZbB%2BLKjoBwinFjunuTD4Aohj6lOVFrf4%2BYnd5VvlWKo4ywr4ju9LpZ5sXBsU1Mh19looVlWacRo8392imvLlpOPLSggnG6l8cOnj%2FLRgNV%2FiWsuygqO2NquR8yakQELzKEPwmMnE%2FVMtU8%2BHHj2i7Wqz0YJSlfxMNYSUx%2BhzStTaBrA%2FAQbHHyGstG0yFtAMgpq82E5IyofxRguGbVn234Ua%2F2Z7f%2BFW%2FGvlrbDG05MIgzkZFFQ7ZsLRIAUb5o2npe9EOYuJZVgOimFxnXucLyAS2dBLW9PS8uiGNU4jyrNDNkeNC6X0npzWtkgbxxBK6L9d%2BIYufAI7yamnQV797q3SWTkiNRxj96m3qu77RIDQuXBkNPAw2oPDt8BAwhQQ9oKvmdIrZeOxiJnny67vKXb5IIMpfG87DSJASDmHjsJYzMsO3jNjCJQLozAId9x35bCvpYWOxst9yvbJSejgw5pq5xzFinv7eIW%2B4iwrp3L3uwmTIQ4SNKweopjMlOe30wnJDEyQY6pgFnqMFWUlE5Onik8seWr1N1YAmBKRb1T0ujfRfRCcAQS%2BKyG7OSQiJ3BW02Q2uf%2B%2FYS6ku%2FlG6T3TObBjUufTrA3ntLm9Y%2BO2AWnH60nZW%2FjgvHEIIjUcCthk7Viq9xRc8jmRRqSqcZycdDzyEgrWYAQAzIoUZX78Ay%2BrZo11Ij9HVk9BrE1WcGWhXrCPz%2Fnm7nvA1Cmx4%2FUfrlGvXRsHJpX%2F0CIAR%2B&X-Amz-Signature=b3118132d82659e34a9a6918911c8465456e2d4f68c4f44a40960058f60c31ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

