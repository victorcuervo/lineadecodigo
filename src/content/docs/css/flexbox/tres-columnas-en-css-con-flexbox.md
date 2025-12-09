---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56SFVVY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvHI8223iX4dkrDJJGV8eQkGqtGx%2BaBr2C1LQk6CmMuAiEAiw6QVGHYPjRgD0RL0XCyzXFaic8tEvAxHQIx9KOZNF4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEYlJg7mmZaxthiQSrcA1U3PYwukgm8dVhQfz2%2Bi8Ff7A4iZgQyZ8tfd9MScRXbdBpElG1kVgD3%2B9R%2BC5zwiwgX%2BNcR1sBPBfR08voUe9nTPyPawQb0wHwmIpAXMpordoCPt4MJFTrkvodP6PPHS%2BPXiCT7Wh%2BpsuVZiwyPWVKIdXWN2nbHSMTalpheLlwVReF0o0ucgVE8LEycGBUHRyQdJ21u8pGbJl54qjOyZ6JBwRPKsgi5KA7PptUTFEMjdRTpiGZJBhpcAvv0HvH5GCUMo0T5hw4z5is0xtLUO14MIo8BYu453UaewEuH3IKiAX5y4yk2fqhTSw4%2F9fAUamhaGYt6nUDl6nM1u6obH7hvkT4SyhhNLONsVE9kx1Rs0hPPY6Ozt28MoDJ6Ivl%2FBLyb6ZHyLW1e6n0w8bkaLI893QA%2FZwoQCh2DKbykfkB3KpB2a2OYLNOdNIMkwC6dcsLSQ4unEpoXtDbOp3tPKXgeo1ffC5MUg9CTowaknZF07c9Gt%2B0B%2BSJ9skPxX24tb0PNO2KsB3GzyUggdCFJjINi8SAfhTiTSPAfpJ89KmKNeDxADEThATA%2B8hSw8nX7uh5jrEmaDOW4F1Q9XySPH5FDKtFfMoeBaR29KV3ZTLr12gRV41LNfWurmyvpMJCO3skGOqUBbr7J9bhqhKFWH%2FXfCeKqdt0W5fhfkmLOVBX%2BHP2oyBUOD5V4JoCUDCmMJxhW2x4SR8yOmuMa0NLhbB488%2BR6azDBS96QgyCT9X3Wylt8ca9u%2FSbXMC01%2FYFy2eCZkMGeT3PNT0wJT4G%2BZ3E0gkJSCvD3zNzJoxMJJpSnuaKqwv%2B0IX6Tc9Zia2H0YcLlxeYmL73CzXge3CY50jkvLx1f4vw44%2B6H&X-Amz-Signature=6c547d7d24f7ed1a079f91a8c9c22f972d09204ee876daeaacb1ba0fa9c8c1ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z56SFVVY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvHI8223iX4dkrDJJGV8eQkGqtGx%2BaBr2C1LQk6CmMuAiEAiw6QVGHYPjRgD0RL0XCyzXFaic8tEvAxHQIx9KOZNF4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEEYlJg7mmZaxthiQSrcA1U3PYwukgm8dVhQfz2%2Bi8Ff7A4iZgQyZ8tfd9MScRXbdBpElG1kVgD3%2B9R%2BC5zwiwgX%2BNcR1sBPBfR08voUe9nTPyPawQb0wHwmIpAXMpordoCPt4MJFTrkvodP6PPHS%2BPXiCT7Wh%2BpsuVZiwyPWVKIdXWN2nbHSMTalpheLlwVReF0o0ucgVE8LEycGBUHRyQdJ21u8pGbJl54qjOyZ6JBwRPKsgi5KA7PptUTFEMjdRTpiGZJBhpcAvv0HvH5GCUMo0T5hw4z5is0xtLUO14MIo8BYu453UaewEuH3IKiAX5y4yk2fqhTSw4%2F9fAUamhaGYt6nUDl6nM1u6obH7hvkT4SyhhNLONsVE9kx1Rs0hPPY6Ozt28MoDJ6Ivl%2FBLyb6ZHyLW1e6n0w8bkaLI893QA%2FZwoQCh2DKbykfkB3KpB2a2OYLNOdNIMkwC6dcsLSQ4unEpoXtDbOp3tPKXgeo1ffC5MUg9CTowaknZF07c9Gt%2B0B%2BSJ9skPxX24tb0PNO2KsB3GzyUggdCFJjINi8SAfhTiTSPAfpJ89KmKNeDxADEThATA%2B8hSw8nX7uh5jrEmaDOW4F1Q9XySPH5FDKtFfMoeBaR29KV3ZTLr12gRV41LNfWurmyvpMJCO3skGOqUBbr7J9bhqhKFWH%2FXfCeKqdt0W5fhfkmLOVBX%2BHP2oyBUOD5V4JoCUDCmMJxhW2x4SR8yOmuMa0NLhbB488%2BR6azDBS96QgyCT9X3Wylt8ca9u%2FSbXMC01%2FYFy2eCZkMGeT3PNT0wJT4G%2BZ3E0gkJSCvD3zNzJoxMJJpSnuaKqwv%2B0IX6Tc9Zia2H0YcLlxeYmL73CzXge3CY50jkvLx1f4vw44%2B6H&X-Amz-Signature=9a7f2ae4122a1dcbbf48983649ac72dd088a6e734fe50a1540b57e547650f804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

