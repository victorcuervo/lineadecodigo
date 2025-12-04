---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYUBXCG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD04Oom6WA9evH5j9Na%2F3LuG6H%2FOkbgx9OkqKD5SXJyFgIgPXsaVxrqoyur7XRBR%2Fw5HS%2BFW5METh59kl3t4oC5OgIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNE8ww5Ds0s%2FYOnB%2FircA%2FJGYxOV2czczVCDwR2qcATjX6Gu57LFjLSjLU447KFehMysL4VXr%2FO6nI5kJRcQ6VAeAmI9SPjViDt1QG5VPpmOJ12ky71EZCZwMYbDlSwVdqv2JG%2B3HcIDGu5TJNuiAtqruSn4OIasaayJYsCh0mCpMIWisXgWreqeTwCg8Lbr0ZQ2tyO8WGZUgvF6SwDxCRd6McNzzlZYa4bLW%2F7vAfUf9Qhb4KOLMalC5b8K4U28ctf8f0M2RlCa0Ef9HTcb2a0PL5TR7Y%2ByXJaNmoaiBG3AGIHmwTbWiiqoyexJeW9LhHRU1iipqTbcu2FQtfev6RKLn6fL0nQhczrFVgLD6ueBc3WcD6OinRaJHtPWix%2Bo4HSHTUifQAlW2h4j9FQpnEJu%2BPX0bqq5Y6xJAgsdWcs7h5JpbSsJbfupph5xP1QKAeYTotRtW74mRAjCvqksSHtKTc7lLc1U%2BE71%2BBo2DMepcJL0mJLqEzmSfM2Q9jFjAR1DqpVVOZP734EYp76uMcKbdU8L0gq3yniclr2wfSrvWaoFmB0aopqRiur2%2Fu8ki23ty13IBFQElhp0kd4vzznHwsiQDePHcp2RJBjhA%2B0hlJvoDoHp%2BEvErAnhiHF9nW%2BQesqhyenp8fNdMIfpxMkGOqUBBGFYq%2Fcv6kr3M%2BSlkpxb3fBlk0w6DzWasNPoSvK2HAeXvIulkO3jTJqreJqtgUp2e63V7tbFfHHDZW0OE0mW1BCh6UzspaOFURdWtI2asIH7GPylx2dojaUFhMdD76pzSFEhLCg5FoX%2BpkC%2Ftqeu5wp8MY9wi1Iuwuf0xCkwHERZMD9ydKSNS%2FlL9VXIRTmdGRaK9o7xYfTex86eiDYZ98dlshUi&X-Amz-Signature=78071b51409711142a7a75903d06140d7f3ad7ffe43c4889ff07d9359c4e4ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWYUBXCG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD04Oom6WA9evH5j9Na%2F3LuG6H%2FOkbgx9OkqKD5SXJyFgIgPXsaVxrqoyur7XRBR%2Fw5HS%2BFW5METh59kl3t4oC5OgIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDNE8ww5Ds0s%2FYOnB%2FircA%2FJGYxOV2czczVCDwR2qcATjX6Gu57LFjLSjLU447KFehMysL4VXr%2FO6nI5kJRcQ6VAeAmI9SPjViDt1QG5VPpmOJ12ky71EZCZwMYbDlSwVdqv2JG%2B3HcIDGu5TJNuiAtqruSn4OIasaayJYsCh0mCpMIWisXgWreqeTwCg8Lbr0ZQ2tyO8WGZUgvF6SwDxCRd6McNzzlZYa4bLW%2F7vAfUf9Qhb4KOLMalC5b8K4U28ctf8f0M2RlCa0Ef9HTcb2a0PL5TR7Y%2ByXJaNmoaiBG3AGIHmwTbWiiqoyexJeW9LhHRU1iipqTbcu2FQtfev6RKLn6fL0nQhczrFVgLD6ueBc3WcD6OinRaJHtPWix%2Bo4HSHTUifQAlW2h4j9FQpnEJu%2BPX0bqq5Y6xJAgsdWcs7h5JpbSsJbfupph5xP1QKAeYTotRtW74mRAjCvqksSHtKTc7lLc1U%2BE71%2BBo2DMepcJL0mJLqEzmSfM2Q9jFjAR1DqpVVOZP734EYp76uMcKbdU8L0gq3yniclr2wfSrvWaoFmB0aopqRiur2%2Fu8ki23ty13IBFQElhp0kd4vzznHwsiQDePHcp2RJBjhA%2B0hlJvoDoHp%2BEvErAnhiHF9nW%2BQesqhyenp8fNdMIfpxMkGOqUBBGFYq%2Fcv6kr3M%2BSlkpxb3fBlk0w6DzWasNPoSvK2HAeXvIulkO3jTJqreJqtgUp2e63V7tbFfHHDZW0OE0mW1BCh6UzspaOFURdWtI2asIH7GPylx2dojaUFhMdD76pzSFEhLCg5FoX%2BpkC%2Ftqeu5wp8MY9wi1Iuwuf0xCkwHERZMD9ydKSNS%2FlL9VXIRTmdGRaK9o7xYfTex86eiDYZ98dlshUi&X-Amz-Signature=1a2123d478eee533b3cdc1cb3c85c4f1c25004d9f0eaeaf4b1697261906d1a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

