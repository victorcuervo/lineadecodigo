---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7RDWWA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvQMUx4m20Kcpcx0TXJFa4od6hvLZyxh6Qyt5a7rIEQAiB5Oz4xXotjeGgJUTu74To1cotfCduv%2BmVzOKAdmiAbWir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMX5TIXYX1%2F01nfCdVKtwD1aMDwqi2Z2EldQRPcTqKO6nFnutmvLxGkhRpwPQMFGB1kWP56GYoyyOEM%2BtFd%2Bm68OTdJ2Xcpwwach1GXFG6L48nxkoyrKb43KmwAGHWGc7pamjgHNRw9O%2B%2F5f8ROuRbSOFdAyEQnGO%2BQI%2Fc3nJiHjboXygfkpqU%2FXhMoSYfxlv2bGcs%2BIbOuebiMJmstQTPhECEFM78iMq%2FxmDwTlzahg1iLbMmJkP4Q%2FFRfpX9neQAgCkT4fgWpSAwFFd7vLEOdtDtIyu77ylPDRq6VM1VBbZS8WBlWmUUCm2%2FZ6iU5L4m%2FlwebnH1%2B0Jhc7qU1l2uwzA7PFGWCJjQKCjg%2BMGGHK7RU7nQjozDRzzWHE08uT4lgFsowCfDryRvRcbF8f1qg%2Bc53TRGXVzVIfXq2g8y74nG1LtWRaBw%2Fp8YKKpZng7Z7cqPuL4y5P%2FCSkZNITgfOk%2Fn%2FtoKGPOuJQBf16ufJOpizuBy18VCwN%2BHZd9ihrkHJQO45%2B6RK7iyLTTZPUZcgcjLQdn0Fm5WyfkLfJOuccW0CJ1c0yeG6uS%2FAM5KAliP49GGU5EVIMPZqVErUZelsCXyfKpPX5941sxyAxOICZzTbLBBx5x3HY7oIpmMkCsyj1MvBe9s4smJQ4wwpKvJyQY6pgFNpRvAMQoOIQklLiLUlPpU5woA7KtzOiLMPiEDYeThiJu3bNAo8DnKXdXtCKrI4V63%2BOHdzbRisNviwrz2BKqgqr7OW1veZaYIZ6HfrmLsWPfa71ZfDWK4Hkgbu7E7r0lB6X810zFXIOcUD2XBXeH1Ki%2BX1MR0tKfcr%2Fi%2BLrrhD22fxVjC%2Fem6c7rNVG4X%2BO7FCiLppWuEZ0Sae2%2FCRA6ap1jzqqJx&X-Amz-Signature=ef0492fbcd1676b5c92093491bc74768dad4277cd8f0a4f31b1a415d25f3d001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7RDWWA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBvQMUx4m20Kcpcx0TXJFa4od6hvLZyxh6Qyt5a7rIEQAiB5Oz4xXotjeGgJUTu74To1cotfCduv%2BmVzOKAdmiAbWir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMX5TIXYX1%2F01nfCdVKtwD1aMDwqi2Z2EldQRPcTqKO6nFnutmvLxGkhRpwPQMFGB1kWP56GYoyyOEM%2BtFd%2Bm68OTdJ2Xcpwwach1GXFG6L48nxkoyrKb43KmwAGHWGc7pamjgHNRw9O%2B%2F5f8ROuRbSOFdAyEQnGO%2BQI%2Fc3nJiHjboXygfkpqU%2FXhMoSYfxlv2bGcs%2BIbOuebiMJmstQTPhECEFM78iMq%2FxmDwTlzahg1iLbMmJkP4Q%2FFRfpX9neQAgCkT4fgWpSAwFFd7vLEOdtDtIyu77ylPDRq6VM1VBbZS8WBlWmUUCm2%2FZ6iU5L4m%2FlwebnH1%2B0Jhc7qU1l2uwzA7PFGWCJjQKCjg%2BMGGHK7RU7nQjozDRzzWHE08uT4lgFsowCfDryRvRcbF8f1qg%2Bc53TRGXVzVIfXq2g8y74nG1LtWRaBw%2Fp8YKKpZng7Z7cqPuL4y5P%2FCSkZNITgfOk%2Fn%2FtoKGPOuJQBf16ufJOpizuBy18VCwN%2BHZd9ihrkHJQO45%2B6RK7iyLTTZPUZcgcjLQdn0Fm5WyfkLfJOuccW0CJ1c0yeG6uS%2FAM5KAliP49GGU5EVIMPZqVErUZelsCXyfKpPX5941sxyAxOICZzTbLBBx5x3HY7oIpmMkCsyj1MvBe9s4smJQ4wwpKvJyQY6pgFNpRvAMQoOIQklLiLUlPpU5woA7KtzOiLMPiEDYeThiJu3bNAo8DnKXdXtCKrI4V63%2BOHdzbRisNviwrz2BKqgqr7OW1veZaYIZ6HfrmLsWPfa71ZfDWK4Hkgbu7E7r0lB6X810zFXIOcUD2XBXeH1Ki%2BX1MR0tKfcr%2Fi%2BLrrhD22fxVjC%2Fem6c7rNVG4X%2BO7FCiLppWuEZ0Sae2%2FCRA6ap1jzqqJx&X-Amz-Signature=075e6404fbe536745b7c1d1a3834967c7fb89cccd6ceb978811a9044d63bc55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

