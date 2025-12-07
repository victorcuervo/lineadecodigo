---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YAWRUI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNbAvFey36cPdrDmZ39ZLDx6%2BMMvx1BmecRkHWPOrcFwIgDHeEu8E6zVL9TL36uaPU5m2QB0okYnHbXfCO%2FEjCqrkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHAVW1YVnOhvnIM%2FCrcA7OdO745YB9wmduT5gSUpHGTWF3%2BaOkeQCbahKz9ACD1eh3pU6ChxXTyySbaalinyYW5aphlNJb4Km6EuxV2wXXKb%2BAbYONvfsdokgkw78Jxx8Tew8CIB90Nn0lALu3zOnuCEmp0aPvve4Cs1v2EnPMexx76dVl6dTZVQg4lIb4l4Y7FFfubIJ7Rc%2BmxIVdIdFAnmJYbFGqKRq9Luf0S%2Br6nc7szn3G1r%2BYFvcfYdB0Qp0cGF57UXi%2BkQ8FX2Etn2UOXuzsYJLSIEAxPxvRTSujZQKP8x2oJCdiBwmJH%2BSSNhmgXo5RPFcdoh4ai8j7jB0VwQR1crcdpi2cPjiRcNIb7ABgczG11g33BeMbii%2BSdRHG7WJgdLY4CPEkddTAGd8CTw0LW5hcEbdYRmm7HuYhXhprQNSJOUIbN%2BG4957JofFayN3fyH5jPhBsR8wkfFfzPY4V1E8LqY63Z1dfr1sEOFvgUExVDyGZyr4H6WoE8ciHWTqxGak6CbX3ckC2pmA%2BaBRjF8ZNdyi3qjuxdz4O8Aoo%2FxaDkhQ5zzzVTzT2tQFfiCTj7vJ2dLLHkEEQTudJWEGkEd%2Bk%2Bg3skMOmoOySycVLxbHSHlPWKNr6HLw%2FNr5oUfepwEQ8Zyn4CMPag1MkGOqUBxfADqazYEeJJix55cIM%2BL3uhgmO6mAFxV5o5ZM4WadSnwQgPg6t1X2CqL8gOR2bmXQfcm7zF8JDm8V6KlLOGxsEpiI2q7IJqCRG9%2B%2Bz9qxIYhTfiOf0CGp0WkK12%2Buk7gW040uDxLoTK7WxpsDcjOMNvq9gUaZgBNpIclPRiPHX9xfTLxrg5QO0gooYYddixnY1m8fQOvDWv4Gr767H9SvekWsE8&X-Amz-Signature=a133ea67552fb5903ec250825d275da08a6dcf9558c26a7585ca684a30c27865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YAWRUI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T090604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNbAvFey36cPdrDmZ39ZLDx6%2BMMvx1BmecRkHWPOrcFwIgDHeEu8E6zVL9TL36uaPU5m2QB0okYnHbXfCO%2FEjCqrkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHAVW1YVnOhvnIM%2FCrcA7OdO745YB9wmduT5gSUpHGTWF3%2BaOkeQCbahKz9ACD1eh3pU6ChxXTyySbaalinyYW5aphlNJb4Km6EuxV2wXXKb%2BAbYONvfsdokgkw78Jxx8Tew8CIB90Nn0lALu3zOnuCEmp0aPvve4Cs1v2EnPMexx76dVl6dTZVQg4lIb4l4Y7FFfubIJ7Rc%2BmxIVdIdFAnmJYbFGqKRq9Luf0S%2Br6nc7szn3G1r%2BYFvcfYdB0Qp0cGF57UXi%2BkQ8FX2Etn2UOXuzsYJLSIEAxPxvRTSujZQKP8x2oJCdiBwmJH%2BSSNhmgXo5RPFcdoh4ai8j7jB0VwQR1crcdpi2cPjiRcNIb7ABgczG11g33BeMbii%2BSdRHG7WJgdLY4CPEkddTAGd8CTw0LW5hcEbdYRmm7HuYhXhprQNSJOUIbN%2BG4957JofFayN3fyH5jPhBsR8wkfFfzPY4V1E8LqY63Z1dfr1sEOFvgUExVDyGZyr4H6WoE8ciHWTqxGak6CbX3ckC2pmA%2BaBRjF8ZNdyi3qjuxdz4O8Aoo%2FxaDkhQ5zzzVTzT2tQFfiCTj7vJ2dLLHkEEQTudJWEGkEd%2Bk%2Bg3skMOmoOySycVLxbHSHlPWKNr6HLw%2FNr5oUfepwEQ8Zyn4CMPag1MkGOqUBxfADqazYEeJJix55cIM%2BL3uhgmO6mAFxV5o5ZM4WadSnwQgPg6t1X2CqL8gOR2bmXQfcm7zF8JDm8V6KlLOGxsEpiI2q7IJqCRG9%2B%2Bz9qxIYhTfiOf0CGp0WkK12%2Buk7gW040uDxLoTK7WxpsDcjOMNvq9gUaZgBNpIclPRiPHX9xfTLxrg5QO0gooYYddixnY1m8fQOvDWv4Gr767H9SvekWsE8&X-Amz-Signature=a3629107b6ac0e2ad374b3271431ad188abd3d96aaa02858555e9d1e26007d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

