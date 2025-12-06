---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDTMF5C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeF%2Fb3V7EJ7YmtgmIJ9mY%2F2LZFiaVerXBZU28Er4evOAiEA4Q7npDeqVirIUUKuavy6x5bFeIWsdEfJU0D7TZckNqYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL74gsy2L79DEmEj8CrcA4ED%2FgvCFYig9IfBOJ4y2xiN1hf6vbHsxBeA22ulFk8vVwW7VC4pAyxuZWs1D%2BoPIKhj%2FViBsrLg38nFMMkfZMW3Lia8f6qanLw%2FI8BABNS7lVIA1jDqTTCOCjaVNLu3uTaY%2B4tQmeID9GHKeM3HoP%2BT3DBjuqAw8At2NZONxqgd2UNpeDO9sGzfOotnmXfw%2FS6COR95QVgzCAHg4pEUoRw%2Byp1aX6pCa%2BxU0A9q%2BtKJ77JOxoccpPc1rkpmmRKZIdr%2B7uCSUwtEJjbxKThqrZPDoNXrBJq6rODSqxtygdt%2FcRY3hJq9B4KJGkL9vNwI9UZSmG4GPZgadC3GufAF2SwfLDnX49YTIKgS5lAlFcuERGlpE9aqvCMtk8s5qc0RhVlYDLySgiAQuOfeXU1tGCW9ChTPTsZEIRmh3LxY1INKzxIR3n2qkmwca3DAe%2BkFeLQ165oXoTUE4bpPlsF7DEvMRVkwiHCZaMe1BEAG%2B8ElsVkWl28p8PNeYmAlXEcqeHCe9pMxHYIKyGeUC0CoMUti0WiNzaBOni9J%2FpnXixC%2FTMHsG22j3WZLkITbYl7Rsgjb5eO3VvdWfjR8tZtZogh5bB5AdiX6P4DVtdgXGn2CpTobhVC4Ywj6k9xGMLqm0MkGOqUBK9j1PH1p1ia1S3wJJ8jZxPmJdcebLt57FIpqvuf8c4x5KCDWIATQpdRsoq22I56uWIKUpf%2Bg3HhFH1%2F%2Bk7ewCTk8HTBGRuBIFXeCyxZQgIuUbOSqJ5Jow1FDFFGnrAK%2FHAK%2BMGGva27Oyb8OshnYHcq4UN1k0JsYAhvG3m%2FCB75AcGBpChWirUOBFCPMN5tXBLLLCS8E%2Bhemyj%2FjeJDt%2BeyIEOC6&X-Amz-Signature=5b805ff75dbfea8a1eb261e3480f9a59ad40167d714c64cec2d2b3a548fc6eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDTMF5C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T143329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeF%2Fb3V7EJ7YmtgmIJ9mY%2F2LZFiaVerXBZU28Er4evOAiEA4Q7npDeqVirIUUKuavy6x5bFeIWsdEfJU0D7TZckNqYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL74gsy2L79DEmEj8CrcA4ED%2FgvCFYig9IfBOJ4y2xiN1hf6vbHsxBeA22ulFk8vVwW7VC4pAyxuZWs1D%2BoPIKhj%2FViBsrLg38nFMMkfZMW3Lia8f6qanLw%2FI8BABNS7lVIA1jDqTTCOCjaVNLu3uTaY%2B4tQmeID9GHKeM3HoP%2BT3DBjuqAw8At2NZONxqgd2UNpeDO9sGzfOotnmXfw%2FS6COR95QVgzCAHg4pEUoRw%2Byp1aX6pCa%2BxU0A9q%2BtKJ77JOxoccpPc1rkpmmRKZIdr%2B7uCSUwtEJjbxKThqrZPDoNXrBJq6rODSqxtygdt%2FcRY3hJq9B4KJGkL9vNwI9UZSmG4GPZgadC3GufAF2SwfLDnX49YTIKgS5lAlFcuERGlpE9aqvCMtk8s5qc0RhVlYDLySgiAQuOfeXU1tGCW9ChTPTsZEIRmh3LxY1INKzxIR3n2qkmwca3DAe%2BkFeLQ165oXoTUE4bpPlsF7DEvMRVkwiHCZaMe1BEAG%2B8ElsVkWl28p8PNeYmAlXEcqeHCe9pMxHYIKyGeUC0CoMUti0WiNzaBOni9J%2FpnXixC%2FTMHsG22j3WZLkITbYl7Rsgjb5eO3VvdWfjR8tZtZogh5bB5AdiX6P4DVtdgXGn2CpTobhVC4Ywj6k9xGMLqm0MkGOqUBK9j1PH1p1ia1S3wJJ8jZxPmJdcebLt57FIpqvuf8c4x5KCDWIATQpdRsoq22I56uWIKUpf%2Bg3HhFH1%2F%2Bk7ewCTk8HTBGRuBIFXeCyxZQgIuUbOSqJ5Jow1FDFFGnrAK%2FHAK%2BMGGva27Oyb8OshnYHcq4UN1k0JsYAhvG3m%2FCB75AcGBpChWirUOBFCPMN5tXBLLLCS8E%2Bhemyj%2FjeJDt%2BeyIEOC6&X-Amz-Signature=2b72558052287dbe5ac97f6bdccd154b0b6e7840a5345398c7ca0fca4070b59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

