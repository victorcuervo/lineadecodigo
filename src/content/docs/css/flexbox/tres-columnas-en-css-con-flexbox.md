---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YFB4QL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwSwiERteoWFp17EgwK3mA9hdm5mD%2FWU%2FKHoLt2YkoXAiEAtl4sKpOc%2FVWcsin%2BzUqzxgiV%2FB1N4fxe9ybyesG%2BtzoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX2QxpavtAQt3wgayrcAyeSOKWIiI%2FtW2ANRBBaY3crWiS4v3IeXV24J%2F88HRxNNnghpQ%2FUjPlTk3B8agrK1p3afTslEylkghiPsWmA938JY082DxluEgvBCSr4rfJocQfFhmEYRa42YY2%2FnIWLnKmjz3qbh5R2vpJ%2BYZ8ZDHK8w1jyTLZfMoQITY39P57aMIwuvkzfDdliX4R3ABQshVEbZ9ZZCmdMU0PupO4tP8RMXvLtH5%2F%2BFjvECa4Ia%2BJmM2GODcxWGRcr5vWO%2B3XqXWsBSEZJZaHCn22LSdAK7tjvbJrLCCWuS9ycnkjspm2S63MVtP7cm7n3P1QM1NcC%2FuQs85dg5IgOKaQ%2BMSvc3tye06o4rE%2BHWi2o0weMPZKG7NR06BAxgEM7F0tfkGAcqz4J%2Fci6UpzBCkIBSYSrX53SF5En5FCGgbIPi4HlHbHFrHuCy9%2F0oYU0vug%2BmaImHeUURxa2GPu91gh5yIsQ8zTXusG3WiMgchVP4%2B9Z0tdaHsNmwdboYrD9%2FWBmkAKNlvGVFbIA0DDU5Vz4%2Byb2OxOtssrMHzYQvqjhkjdqIj%2BVlK0Zsr74DpIqyDVQY0dYoPObG7Nua%2FpzbY8TLwFrsuB8iatCT9LhC1NJWokvL5BhxlEjjS34U62xZAz5MOKh3ckGOqUBafUmRo5lTSFJwBJ8fHybYao%2Fy7pGDrgTIrjmLm%2F9LZvBuRnoAceOGJ1pUvHzP3s5JYPn31GJ3ziVEL%2BCQ%2F79UEIbCuv59GGwgt9DRanfGcF3raHTHVbAvoBu2wjCaS25yWJ6vf%2FmmqOGDaLUFSFxnE6SBevIgoZHLajf1yEzX0aMc42Lu2TQ3KyNNoveKCSQR9HdT8wyvaPxxl3wzHLiU4T2FJjz&X-Amz-Signature=e86276dca8b5347521f5df0ada8045a507817f1b7c4c7182e4976aedfc4a5d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YFB4QL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T232919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwSwiERteoWFp17EgwK3mA9hdm5mD%2FWU%2FKHoLt2YkoXAiEAtl4sKpOc%2FVWcsin%2BzUqzxgiV%2FB1N4fxe9ybyesG%2BtzoqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMX2QxpavtAQt3wgayrcAyeSOKWIiI%2FtW2ANRBBaY3crWiS4v3IeXV24J%2F88HRxNNnghpQ%2FUjPlTk3B8agrK1p3afTslEylkghiPsWmA938JY082DxluEgvBCSr4rfJocQfFhmEYRa42YY2%2FnIWLnKmjz3qbh5R2vpJ%2BYZ8ZDHK8w1jyTLZfMoQITY39P57aMIwuvkzfDdliX4R3ABQshVEbZ9ZZCmdMU0PupO4tP8RMXvLtH5%2F%2BFjvECa4Ia%2BJmM2GODcxWGRcr5vWO%2B3XqXWsBSEZJZaHCn22LSdAK7tjvbJrLCCWuS9ycnkjspm2S63MVtP7cm7n3P1QM1NcC%2FuQs85dg5IgOKaQ%2BMSvc3tye06o4rE%2BHWi2o0weMPZKG7NR06BAxgEM7F0tfkGAcqz4J%2Fci6UpzBCkIBSYSrX53SF5En5FCGgbIPi4HlHbHFrHuCy9%2F0oYU0vug%2BmaImHeUURxa2GPu91gh5yIsQ8zTXusG3WiMgchVP4%2B9Z0tdaHsNmwdboYrD9%2FWBmkAKNlvGVFbIA0DDU5Vz4%2Byb2OxOtssrMHzYQvqjhkjdqIj%2BVlK0Zsr74DpIqyDVQY0dYoPObG7Nua%2FpzbY8TLwFrsuB8iatCT9LhC1NJWokvL5BhxlEjjS34U62xZAz5MOKh3ckGOqUBafUmRo5lTSFJwBJ8fHybYao%2Fy7pGDrgTIrjmLm%2F9LZvBuRnoAceOGJ1pUvHzP3s5JYPn31GJ3ziVEL%2BCQ%2F79UEIbCuv59GGwgt9DRanfGcF3raHTHVbAvoBu2wjCaS25yWJ6vf%2FmmqOGDaLUFSFxnE6SBevIgoZHLajf1yEzX0aMc42Lu2TQ3KyNNoveKCSQR9HdT8wyvaPxxl3wzHLiU4T2FJjz&X-Amz-Signature=b20fb7047bd28ba43618a5228818f0aee62d96e372ce2cd3041cd1dd62910ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

