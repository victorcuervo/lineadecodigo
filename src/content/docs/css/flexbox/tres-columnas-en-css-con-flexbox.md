---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQNAVJ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMIHBDkXz4F9yxySOc35iDuO6DaUF19Go1vGeLn6yCZAiBuwZAoW3Veu2Wqebb7yesYaC9z0rvvBUbXtBw7e12EhSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMal1V7CTCeieIdNtkKtwDeeUhXT0wMXQdgKiPoVAAOhC5jf37zdvEeTwzkaziXdmSD1LKweVTM4d4RHDOCdFfHhJqB7nkgLcFf%2BUV7z%2FjUPB1C3ekxYdl%2FQwr1UhFX6TqPL2N0dfHduV9qnH5HAix%2BD5nB4pjD0L8WRVRKsQAM%2BcCzD7SGIaNnaQ3w3Vcq93t28kFBRzxjjVwwtiA7a6EeWqqTe8qxot2eZL0Mo1YvlSbObp7K3aggClQ8Y1iQlrAccf5sDsw2pasmuW7RrTrugnk5v92caAGdMXXBR%2F%2BJczqDHUu0IA1d8PY5kBTGNaHr2s7W4WAYW4tJnYis7S8z5a5UKWY2z9Lv0giekWkFhatt54YZw33LCIYb5b4wW2UMIUb4VkyXgpPjwjrtJ%2F7YisGAMB%2FSuRl%2BRAmdcKzVt%2FDg2InrDSc1DRTYm7LtAHlEz88GiYT9QIF7RgE09J0cN11lnZUz4X9uBeshugwty%2FmXQp4bkYPP8P6Sea3iOpoj9TGuIVXNc%2BQNAr8Ze5Sx%2F7r78ChBb4SYloH2xlvRBMMnwoXau8q2hx6UNDSNSGyXgH32kCAjKe79Kv8i7HlpdogpSYLyssbnHKqapjgeYZL6OGx%2BzRvw8HSpY8h4bq%2FTf%2BqR6vEX7UeVtowsJrVyQY6pgEI2cFiniQMEmPgaKjLFrejF6buWtdokoIUyz9cW0KuN7FX0xpuhG7lQ4%2B7y1pWd1OS0VRQ6ItzkxCVuwxqPyvGSTrbP7tvFEszFu%2BbIUHf3Efs%2BSsQFHktsvXjiZ884qY6keTx6MDZ5acUbNkab4T1IqVEWhkX6P7oHtbhHRsMGZAcab%2Ftgu3ltuSwBia%2FnehCnlNVoWrMMVtUuCd4m0%2FfzCOAE6zO&X-Amz-Signature=0fbdaa344330f910384a00b8f1eaaa04eb52ad9d6737e31110e457c302ac7540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQNAVJ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T131756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMIHBDkXz4F9yxySOc35iDuO6DaUF19Go1vGeLn6yCZAiBuwZAoW3Veu2Wqebb7yesYaC9z0rvvBUbXtBw7e12EhSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMal1V7CTCeieIdNtkKtwDeeUhXT0wMXQdgKiPoVAAOhC5jf37zdvEeTwzkaziXdmSD1LKweVTM4d4RHDOCdFfHhJqB7nkgLcFf%2BUV7z%2FjUPB1C3ekxYdl%2FQwr1UhFX6TqPL2N0dfHduV9qnH5HAix%2BD5nB4pjD0L8WRVRKsQAM%2BcCzD7SGIaNnaQ3w3Vcq93t28kFBRzxjjVwwtiA7a6EeWqqTe8qxot2eZL0Mo1YvlSbObp7K3aggClQ8Y1iQlrAccf5sDsw2pasmuW7RrTrugnk5v92caAGdMXXBR%2F%2BJczqDHUu0IA1d8PY5kBTGNaHr2s7W4WAYW4tJnYis7S8z5a5UKWY2z9Lv0giekWkFhatt54YZw33LCIYb5b4wW2UMIUb4VkyXgpPjwjrtJ%2F7YisGAMB%2FSuRl%2BRAmdcKzVt%2FDg2InrDSc1DRTYm7LtAHlEz88GiYT9QIF7RgE09J0cN11lnZUz4X9uBeshugwty%2FmXQp4bkYPP8P6Sea3iOpoj9TGuIVXNc%2BQNAr8Ze5Sx%2F7r78ChBb4SYloH2xlvRBMMnwoXau8q2hx6UNDSNSGyXgH32kCAjKe79Kv8i7HlpdogpSYLyssbnHKqapjgeYZL6OGx%2BzRvw8HSpY8h4bq%2FTf%2BqR6vEX7UeVtowsJrVyQY6pgEI2cFiniQMEmPgaKjLFrejF6buWtdokoIUyz9cW0KuN7FX0xpuhG7lQ4%2B7y1pWd1OS0VRQ6ItzkxCVuwxqPyvGSTrbP7tvFEszFu%2BbIUHf3Efs%2BSsQFHktsvXjiZ884qY6keTx6MDZ5acUbNkab4T1IqVEWhkX6P7oHtbhHRsMGZAcab%2Ftgu3ltuSwBia%2FnehCnlNVoWrMMVtUuCd4m0%2FfzCOAE6zO&X-Amz-Signature=f9cc3c059b0c053ee6875d6a9ea92e704b2e36deabce8ebb6c91f3561859d146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

