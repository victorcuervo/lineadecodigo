---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOIPHRY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEhcXf%2FoDV%2B%2BW6mbb%2BqFT90eX43feLcjK4eF%2FTkPBbLgAiEAjz25dIXfCD7xEVE%2BlPNjCL3USQ8cIDwhj2NkSLy0njsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNh%2B4zAD4jBe%2FRL1gircAwzKkSRXtaH7xk44iAFcoYkSCk%2BbPo3gpnQmCnPMHgTImIZTi1kpS5kmopDnsetwhgS%2B9vKNjDGMUk%2BY0wN2mGRjRSzdysBps%2BkVugvMdjDSXb2lC7kfPUhErGdzt9BQpHLRizP%2Fx6Wn9rigNodAs%2F91zE0w1%2BRBb42cPx0LisTXp0wmEA8sI35%2BZ%2Ba2FU08ShQW5OplyXiksad1P6fBjVdqmrArOK6Gg1QcwSJBnRQCHK7EsoM24ivaJHp7VGgDDIXO07XH3QEoAJg17JUcKAKBsjtOOr89ym3648wjNhLsuehbrLv5qrFLvffUD%2B2960QTIPOnZRgCkk3iObHnCldQT1ax8Fa8V0bSg1jxlYlgMqJ8gZa7RDioKVVf0RZ%2F51uF%2B1V1XBEEelDaey3cwvJ9O%2FBcuGSvGYg9LrtYlL8L4guva3opRgPhwUzVJcvf6sxCMnZ%2Fh5cyIWQ9WDsWSNMDY9WZbSLyNT%2FNtYYUZL5CO%2Bvl8JuqpyvrjC2su7j%2B5XlDIq9q%2FYJZBwZcaTrz2m39AuLei8k64%2Bd0c%2FE4rLhMVvRHKGaSxYfW119j4JCZD1x2PF37fxUoYkPavbELiWGNCT%2BVAHrNEI7uaT0eh4wM2aLVoqONnGtV37DRMKiQxMkGOqUB7PFSv70%2FismDyA59GGRNslH2Rg5Rs3Eu7aWB%2BC6boOBHq7CzLFfBrUgKzdZQ3hv%2F1AFFlYlusRsxDLX53EsaKnsaNhZm%2BNnbvRx49oMlva3yng20R1dWLbDRZOIKB6W4t2a0Dok9%2B15TeqMpghn5hrEMGBRnxU00NxNaiiYwatpZ%2BPTMme7aHfCgdwPPq2vc%2BiQxTcgTmzDX7d1FTDjoQPhdtEe3&X-Amz-Signature=b0859eaf9ecd20b7c0b54372848af959c91b57dbbe4a39eefcbdf85a801cee38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WOIPHRY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEhcXf%2FoDV%2B%2BW6mbb%2BqFT90eX43feLcjK4eF%2FTkPBbLgAiEAjz25dIXfCD7xEVE%2BlPNjCL3USQ8cIDwhj2NkSLy0njsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNh%2B4zAD4jBe%2FRL1gircAwzKkSRXtaH7xk44iAFcoYkSCk%2BbPo3gpnQmCnPMHgTImIZTi1kpS5kmopDnsetwhgS%2B9vKNjDGMUk%2BY0wN2mGRjRSzdysBps%2BkVugvMdjDSXb2lC7kfPUhErGdzt9BQpHLRizP%2Fx6Wn9rigNodAs%2F91zE0w1%2BRBb42cPx0LisTXp0wmEA8sI35%2BZ%2Ba2FU08ShQW5OplyXiksad1P6fBjVdqmrArOK6Gg1QcwSJBnRQCHK7EsoM24ivaJHp7VGgDDIXO07XH3QEoAJg17JUcKAKBsjtOOr89ym3648wjNhLsuehbrLv5qrFLvffUD%2B2960QTIPOnZRgCkk3iObHnCldQT1ax8Fa8V0bSg1jxlYlgMqJ8gZa7RDioKVVf0RZ%2F51uF%2B1V1XBEEelDaey3cwvJ9O%2FBcuGSvGYg9LrtYlL8L4guva3opRgPhwUzVJcvf6sxCMnZ%2Fh5cyIWQ9WDsWSNMDY9WZbSLyNT%2FNtYYUZL5CO%2Bvl8JuqpyvrjC2su7j%2B5XlDIq9q%2FYJZBwZcaTrz2m39AuLei8k64%2Bd0c%2FE4rLhMVvRHKGaSxYfW119j4JCZD1x2PF37fxUoYkPavbELiWGNCT%2BVAHrNEI7uaT0eh4wM2aLVoqONnGtV37DRMKiQxMkGOqUB7PFSv70%2FismDyA59GGRNslH2Rg5Rs3Eu7aWB%2BC6boOBHq7CzLFfBrUgKzdZQ3hv%2F1AFFlYlusRsxDLX53EsaKnsaNhZm%2BNnbvRx49oMlva3yng20R1dWLbDRZOIKB6W4t2a0Dok9%2B15TeqMpghn5hrEMGBRnxU00NxNaiiYwatpZ%2BPTMme7aHfCgdwPPq2vc%2BiQxTcgTmzDX7d1FTDjoQPhdtEe3&X-Amz-Signature=26b318522ac005b753401f553a0f9c5da4eef9387984b078e1c255a816e6bc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

