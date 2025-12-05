---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DBX673C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAffDetbLmN%2FpH63rpIMRSad1wysU2C75okC0UQVHeWLAiEAjs78WTFePfJpS%2B2PBFL3KCI5OQaq4Jv4d%2FzCPw33HAAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPR293Ym1np6CZDU5ircA3sjmynayTVDZEaJEgYXK711dWpsRhc3o%2BDKXoko9LGpWLutDzpYOoSX3rXer1RebxM6norTMbQgJZbmR6wI0g%2Bb0dLO6xY7qKbvXCMp8GsphEorc06yEKOWb0vMlQ3YZZNgndRga0Ow5Gt%2F5QKQq0bFBzjcPwAQOamVkFFssBHwXG7pxvtaVMG8D9p3HxxeiKHeUTmUPzlrjs9v9Nt2eGwu4e96lAsm0q%2F2pbAZaI5hns2HBoLcPTLCII4b2SYMtd4zm5OwK8PGA%2FKqpPPkZFsvVdaCpqnme8B%2FbUtAws8Aq6Ra%2B72FGpX8SsNos3QQ8SsvAW9yhan4Nuon0AI01QBx2mYc8asiDIdTTJgh7gbzBjte9Cv2%2Ff6W3LAp7iEkgQGnwhyA1nVEbkSQiaNM26cw1%2B4JMVLM%2B7%2FYVy3LogH2XqTpUq12QmC8D3BpnV3X6NtQAOvIQIutK4eu2OVefFiwk5KakgMK9O41D6O2mXvc8xUy3V%2BBOVoKNa4xTjHfc%2F6uoNCJ5kyzpNMeroYARNtALzcf07CuZsF18AyPkvACiw1RUEPtAEmirdcb8anOeMRbx%2Bk51sfedwr5P0CqlZknNRZAYOtspYQyXH%2Bd0aIyGj5%2BovIPTYT7IbtUMM7LyskGOqUBfyucRneFJyAbsMQZM%2FnpGNk%2BmtdxRs%2BAanKc9OhBtAtIAM5n%2FfzkE3RNXoLudOOddI9tG5IAyKai0M7G%2FiWNEGGgDCtOXjnfyMGFt2Zj2nbbISvE7j2DMyh6Xt80DpsrIsz1KgvypXp%2BuHx8c82CcFhOys%2BhFBu%2BfPLbn7ySAojApwcvGj9OXlqwTyZZXkPJChRlr9IEBFNhSw8T2kp0yvQL593U&X-Amz-Signature=e89f334cb0541fc1241e7a0eab9861ba79df764ce902a091493651207c0cf7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DBX673C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T104759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAffDetbLmN%2FpH63rpIMRSad1wysU2C75okC0UQVHeWLAiEAjs78WTFePfJpS%2B2PBFL3KCI5OQaq4Jv4d%2FzCPw33HAAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDPR293Ym1np6CZDU5ircA3sjmynayTVDZEaJEgYXK711dWpsRhc3o%2BDKXoko9LGpWLutDzpYOoSX3rXer1RebxM6norTMbQgJZbmR6wI0g%2Bb0dLO6xY7qKbvXCMp8GsphEorc06yEKOWb0vMlQ3YZZNgndRga0Ow5Gt%2F5QKQq0bFBzjcPwAQOamVkFFssBHwXG7pxvtaVMG8D9p3HxxeiKHeUTmUPzlrjs9v9Nt2eGwu4e96lAsm0q%2F2pbAZaI5hns2HBoLcPTLCII4b2SYMtd4zm5OwK8PGA%2FKqpPPkZFsvVdaCpqnme8B%2FbUtAws8Aq6Ra%2B72FGpX8SsNos3QQ8SsvAW9yhan4Nuon0AI01QBx2mYc8asiDIdTTJgh7gbzBjte9Cv2%2Ff6W3LAp7iEkgQGnwhyA1nVEbkSQiaNM26cw1%2B4JMVLM%2B7%2FYVy3LogH2XqTpUq12QmC8D3BpnV3X6NtQAOvIQIutK4eu2OVefFiwk5KakgMK9O41D6O2mXvc8xUy3V%2BBOVoKNa4xTjHfc%2F6uoNCJ5kyzpNMeroYARNtALzcf07CuZsF18AyPkvACiw1RUEPtAEmirdcb8anOeMRbx%2Bk51sfedwr5P0CqlZknNRZAYOtspYQyXH%2Bd0aIyGj5%2BovIPTYT7IbtUMM7LyskGOqUBfyucRneFJyAbsMQZM%2FnpGNk%2BmtdxRs%2BAanKc9OhBtAtIAM5n%2FfzkE3RNXoLudOOddI9tG5IAyKai0M7G%2FiWNEGGgDCtOXjnfyMGFt2Zj2nbbISvE7j2DMyh6Xt80DpsrIsz1KgvypXp%2BuHx8c82CcFhOys%2BhFBu%2BfPLbn7ySAojApwcvGj9OXlqwTyZZXkPJChRlr9IEBFNhSw8T2kp0yvQL593U&X-Amz-Signature=f1c81c1055b493091bd666d7b87db7022369efbb913804930e83a2eb45d865af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

