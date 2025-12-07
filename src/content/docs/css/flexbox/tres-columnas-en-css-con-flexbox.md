---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOISK36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0adq9G0aSz%2BaDtpkmvAdOtCPUYJWidpEmTmqFrWgevwIhAO2J3mV6yw7In%2FkioGtPZCTD8MhV1LN9%2B7ttovaBsSxrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qJ9P6bTMGAWOto8q3AO2%2BWvDG%2FOaqors1iaYbytmpfujGHJYhTPU%2Fbp1tA%2BI6qhw0JzV733J5UfC%2FLQeS26eTLKoHQQEX16fiNLV8tNoCYdsEFopQiwah96Ls9wpJwz0zmB9r3DcVWWkQybVuyrOO3t9GuTALmJBsBEve62wBzjsEA7VwqTiU3DN3%2FqDLk%2F%2BqzTDWRvp4Lq54bAyQbpC1NybMMEOhFawAMakmJkcahszx%2Bh%2BGsyA9hv3OfgqoKyLjMrEnt83QtsPDe%2FBbBH9OqAZRFWiYYijr%2FD7ZXgQhvOr%2BJS6AhiTfywKcm%2FwFIUFOe5kG4bTDqAcAMCCGDD2T%2FO8fWGooGQIwn%2BEauPpNtvFbp2tHpo0VUI%2Fs%2BRNow3AkwTpQgBtXPv7s2bWACD3FVnCwEIWdn5pAuaLJyRM8pncvP31PjXEWwwq3lf87o0fsci8bDwFVw8yTWydofCMkIf5HwBFCvXCOEXGrOZYr2boFBC6T5aJqw9Gf9J64PwDBEKGFaDA%2BfS445LvtAKPF6p5s6A9O3ekBtpfFv3es%2FW1ot45MQAesEe%2BpKYWaDJORkct7pKilozE%2BwdqgdaHkpLInPnVmJrPVHcnGJFwegTBWufjr4dhruWMl2tK2hCanGjvK6%2BFth07dTDKmtXJBjqkATtvZcK10V7OekbfYl58TvjRT4dRzmWsZ8KHUDseTE18ypHPxc10fwDmG5UKqKcJCQMyS1W0OjunoWfAhKkxakNrZs58fQwWTclvfzOw3rs5VTMtRfs9DhW4JFGsfFrOr3r4AoRcCSl%2F70zDIVHVxOADPKmIJjn0N8VQAlI9%2FiYltpP%2BDVbk8T%2BSraMeOLBVfqiBGSRF4NC06rNV1WuxOydsA0E6&X-Amz-Signature=4a48814770cec47b615e5d6eaa59b1ace7e03f51cb5b7788722e1e4c13ac226e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOISK36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0adq9G0aSz%2BaDtpkmvAdOtCPUYJWidpEmTmqFrWgevwIhAO2J3mV6yw7In%2FkioGtPZCTD8MhV1LN9%2B7ttovaBsSxrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qJ9P6bTMGAWOto8q3AO2%2BWvDG%2FOaqors1iaYbytmpfujGHJYhTPU%2Fbp1tA%2BI6qhw0JzV733J5UfC%2FLQeS26eTLKoHQQEX16fiNLV8tNoCYdsEFopQiwah96Ls9wpJwz0zmB9r3DcVWWkQybVuyrOO3t9GuTALmJBsBEve62wBzjsEA7VwqTiU3DN3%2FqDLk%2F%2BqzTDWRvp4Lq54bAyQbpC1NybMMEOhFawAMakmJkcahszx%2Bh%2BGsyA9hv3OfgqoKyLjMrEnt83QtsPDe%2FBbBH9OqAZRFWiYYijr%2FD7ZXgQhvOr%2BJS6AhiTfywKcm%2FwFIUFOe5kG4bTDqAcAMCCGDD2T%2FO8fWGooGQIwn%2BEauPpNtvFbp2tHpo0VUI%2Fs%2BRNow3AkwTpQgBtXPv7s2bWACD3FVnCwEIWdn5pAuaLJyRM8pncvP31PjXEWwwq3lf87o0fsci8bDwFVw8yTWydofCMkIf5HwBFCvXCOEXGrOZYr2boFBC6T5aJqw9Gf9J64PwDBEKGFaDA%2BfS445LvtAKPF6p5s6A9O3ekBtpfFv3es%2FW1ot45MQAesEe%2BpKYWaDJORkct7pKilozE%2BwdqgdaHkpLInPnVmJrPVHcnGJFwegTBWufjr4dhruWMl2tK2hCanGjvK6%2BFth07dTDKmtXJBjqkATtvZcK10V7OekbfYl58TvjRT4dRzmWsZ8KHUDseTE18ypHPxc10fwDmG5UKqKcJCQMyS1W0OjunoWfAhKkxakNrZs58fQwWTclvfzOw3rs5VTMtRfs9DhW4JFGsfFrOr3r4AoRcCSl%2F70zDIVHVxOADPKmIJjn0N8VQAlI9%2FiYltpP%2BDVbk8T%2BSraMeOLBVfqiBGSRF4NC06rNV1WuxOydsA0E6&X-Amz-Signature=12c416f55277f1734e91e6fe943651d757c4c273456eff46072aa93965f92ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

