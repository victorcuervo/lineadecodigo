---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJSBRSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJxdOx8ofVHYrtyntolBuwcBTVudykuFUJ%2FrENkHZSwAIhALoKDzruLCDrzFbmqSrFKAJdBaRoIkZUJwkp37xvHUMtKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5IhsOYsuHN7lTJK4q3APHoMoUNSgDis%2BFkirr7O0LMAJLGJXycoh2qM9kEc4sICnoI9JOePWK%2FRz4V9aacbq91MscjDnuwiFyjMH%2FjP%2BxR7IrL0yRHvEO1ixmuIPz4V4gQuqRuleQHYkHPn5F48x3Wltxn0kMNtFQ5dcjbhC6r9hY0VKGnCgAC4Xf8r142jnm52ZAht4Vqjed%2BtcSLMaYhPQ2q82iNUs33ZHJgMjw3OEKkliUsTTRhG%2FLmX%2Fu4nrFwz0zxJBsEyBWvVvlqAXrt6Nmu85SJ4vOIjOHB7zkkzJbTrEqL3vFJY6JmP9BYN7gORiwiy6g%2FbJkeYOLE772IEDhcDOJtZY%2FXMpBJceGmvD7PeE6MGTswbVxzvEXCdB0%2BVeGDbBgL0cWxpDt0A8lTEOb68VZIZuXqr9cin46FxyjHxZbWzrdky5vDeq3ZxBYjpUwtmYpFbWpW15I2Ys%2Bjf8zORVel0iiyo9EGEfXjzUWfYF970%2FPeq2gSN6%2FJaM24JQuswID2CmOMHLpgCnlNwuQgiRgCNCFyaBT5xfSDN5DVvJxR3w65pnEXgCSzQSK6IbFCdmgYRl%2FPvJeLgubyxIX9%2BAH2G5sPFvNZ02PRJxbfCoKgkETmxR82oS6ViC2nM0H30oMuIPnsTCfkNvJBjqkAW7KWGy2HXoRtU7304crO35ObOWsRcXjfFf%2Fw9cucb6gZFcX%2B%2FpnpCpicju6DAGBaZsTc1ebAvYtnhbSTxkBOYkDSyN%2BKEjBnMHdXY9u2lvOBuokomyTO%2BQpIKofw2hHXqR4CTRmr3lpZB15hCBsMWxdOKKxvJc%2FQMNtX8YUwkfOILfMOxSCI6GxueW6bUjgEpLi28z0YDgE5IcEZo3%2Fm2imuBcm&X-Amz-Signature=c2a582ab62793903e2b3f679a5981d20d02dc724ef6eb6783d1bd65256d5d8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJSBRSL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJxdOx8ofVHYrtyntolBuwcBTVudykuFUJ%2FrENkHZSwAIhALoKDzruLCDrzFbmqSrFKAJdBaRoIkZUJwkp37xvHUMtKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5IhsOYsuHN7lTJK4q3APHoMoUNSgDis%2BFkirr7O0LMAJLGJXycoh2qM9kEc4sICnoI9JOePWK%2FRz4V9aacbq91MscjDnuwiFyjMH%2FjP%2BxR7IrL0yRHvEO1ixmuIPz4V4gQuqRuleQHYkHPn5F48x3Wltxn0kMNtFQ5dcjbhC6r9hY0VKGnCgAC4Xf8r142jnm52ZAht4Vqjed%2BtcSLMaYhPQ2q82iNUs33ZHJgMjw3OEKkliUsTTRhG%2FLmX%2Fu4nrFwz0zxJBsEyBWvVvlqAXrt6Nmu85SJ4vOIjOHB7zkkzJbTrEqL3vFJY6JmP9BYN7gORiwiy6g%2FbJkeYOLE772IEDhcDOJtZY%2FXMpBJceGmvD7PeE6MGTswbVxzvEXCdB0%2BVeGDbBgL0cWxpDt0A8lTEOb68VZIZuXqr9cin46FxyjHxZbWzrdky5vDeq3ZxBYjpUwtmYpFbWpW15I2Ys%2Bjf8zORVel0iiyo9EGEfXjzUWfYF970%2FPeq2gSN6%2FJaM24JQuswID2CmOMHLpgCnlNwuQgiRgCNCFyaBT5xfSDN5DVvJxR3w65pnEXgCSzQSK6IbFCdmgYRl%2FPvJeLgubyxIX9%2BAH2G5sPFvNZ02PRJxbfCoKgkETmxR82oS6ViC2nM0H30oMuIPnsTCfkNvJBjqkAW7KWGy2HXoRtU7304crO35ObOWsRcXjfFf%2Fw9cucb6gZFcX%2B%2FpnpCpicju6DAGBaZsTc1ebAvYtnhbSTxkBOYkDSyN%2BKEjBnMHdXY9u2lvOBuokomyTO%2BQpIKofw2hHXqR4CTRmr3lpZB15hCBsMWxdOKKxvJc%2FQMNtX8YUwkfOILfMOxSCI6GxueW6bUjgEpLi28z0YDgE5IcEZo3%2Fm2imuBcm&X-Amz-Signature=99a82365a9dee3a1fa1b1d4d11320d24063883bb3857a25f44ba6e11ff38f198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

