---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2GKDTO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrtDks2q8A020vP9icpCvD4zvoqhDhN77EaDPwPhkdCAIhAIxO4Ro4GWqwhVD2he3oyKKA8%2F4pFsoOXsEEi9wHPeylKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzEVvekBdDsRMyI%2Bsq3APl7JkRXYYIqHzNFDh%2BVb7Me7lHmfhMBcZ0yonkJb0GIu21T2%2BcZJsvvJl%2B18A3fDvSmoI4BT%2FUqoWS0m6t61%2B3UaaiV2525DBUPMblTc1%2BXbXg%2FqJvC%2Fqa4eQ3A3%2F9sYAERA4GToCihsNUiCnhnzuWCU9x%2FZGx4INj6c086qpRaQee%2FMGjicPg%2B7lb35LwNm4jws0z5M1M%2BFkmXiZ1o%2FM9z10Mdto1HwKBKhHUkGuJjCMFi9nOPAG1LR8QzSc86vMeevaKyFVJlNPIZmUbpGkDJKxXwjDemYFE5wVybOPoP5lDE7GWy4PpRuNPMz%2FgXe8OOzIjcrla2WVpYVBP9g8C230ZVThzFeMMa6iv%2BN9UN%2BiiTVqBIOixrr1Z%2F5FK%2BH6GfEYRBdhpopwDEZriwrxUlbjHWHP2GSvfABT6tvvvm2%2B7frON0OFF18Ej9TvFK%2FMpbJ0kg%2FF%2FfI6S5EDJDRBq7GtwxisaduKv3FKwzCjrG7nluoOAZo2UfF16t1OX%2BC8IR6Cav4kiAMv2uFXvvV81fyoRdb9xJckJhFmvHYUomjBNiSIUmsLZ0tyq9cudKkPbl0u4JoaR1tux051%2Foue6r%2F8zB0XI9mgN5VvHQoG5H2eA021TEap0JEU3ezCq7tjJBjqkAV3mqxUBlM%2FJ0IrJvN%2BrTDqu2vIuIlaDnPXXbAC9wM5TNH5J9xbTnjaYu%2BuO6CJsWmcAUTW%2ByMnlS4BOE%2FEvbhhvn1u81pvG2Y%2FgUOQKMR%2BDa9eLLfuUf%2Buoa47pcoonII9bClpmOOoPwfq35m%2BnFL%2BBcdCVlw8PchITWnpXERMKM7EP0vUXTCa73hy1RYYifk0YSF8yyA35ipbmBXj4DJ92kPbf&X-Amz-Signature=4c1b6dc6b8244d797b0d9ec48fe4084ba934197d97e9a1d8f2e273ffa9c8a9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2GKDTO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrtDks2q8A020vP9icpCvD4zvoqhDhN77EaDPwPhkdCAIhAIxO4Ro4GWqwhVD2he3oyKKA8%2F4pFsoOXsEEi9wHPeylKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzEVvekBdDsRMyI%2Bsq3APl7JkRXYYIqHzNFDh%2BVb7Me7lHmfhMBcZ0yonkJb0GIu21T2%2BcZJsvvJl%2B18A3fDvSmoI4BT%2FUqoWS0m6t61%2B3UaaiV2525DBUPMblTc1%2BXbXg%2FqJvC%2Fqa4eQ3A3%2F9sYAERA4GToCihsNUiCnhnzuWCU9x%2FZGx4INj6c086qpRaQee%2FMGjicPg%2B7lb35LwNm4jws0z5M1M%2BFkmXiZ1o%2FM9z10Mdto1HwKBKhHUkGuJjCMFi9nOPAG1LR8QzSc86vMeevaKyFVJlNPIZmUbpGkDJKxXwjDemYFE5wVybOPoP5lDE7GWy4PpRuNPMz%2FgXe8OOzIjcrla2WVpYVBP9g8C230ZVThzFeMMa6iv%2BN9UN%2BiiTVqBIOixrr1Z%2F5FK%2BH6GfEYRBdhpopwDEZriwrxUlbjHWHP2GSvfABT6tvvvm2%2B7frON0OFF18Ej9TvFK%2FMpbJ0kg%2FF%2FfI6S5EDJDRBq7GtwxisaduKv3FKwzCjrG7nluoOAZo2UfF16t1OX%2BC8IR6Cav4kiAMv2uFXvvV81fyoRdb9xJckJhFmvHYUomjBNiSIUmsLZ0tyq9cudKkPbl0u4JoaR1tux051%2Foue6r%2F8zB0XI9mgN5VvHQoG5H2eA021TEap0JEU3ezCq7tjJBjqkAV3mqxUBlM%2FJ0IrJvN%2BrTDqu2vIuIlaDnPXXbAC9wM5TNH5J9xbTnjaYu%2BuO6CJsWmcAUTW%2ByMnlS4BOE%2FEvbhhvn1u81pvG2Y%2FgUOQKMR%2BDa9eLLfuUf%2Buoa47pcoonII9bClpmOOoPwfq35m%2BnFL%2BBcdCVlw8PchITWnpXERMKM7EP0vUXTCa73hy1RYYifk0YSF8yyA35ipbmBXj4DJ92kPbf&X-Amz-Signature=9a480a0ae043edf542ba91e901aa78ad0bc03b24d2c023a2c697afdec910fe2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

