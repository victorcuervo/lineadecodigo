---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VX3Z25%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn8pEUKOz3XgXbuInp4%2BU5%2BisWZVfAi3I06vxwkPZbpAIgbnBekhMPSBYAGYArXw2BIDXaAT4ZZld%2Bkspl36irERYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLSLKxRWHM7Txu1t9CrcA8i5loe8uXC14lXXBakkHkLFRBUN3PotG7%2BOlNQ7ewmd0l%2FaYlbu6PKNXvA5vfniEzcqY6eCds8NaBdjbBvlzukuMkeT3DZ%2FdUDNXBk8PhDlAHqvZquEDsqVWfKvukkTmTXjm0pRMfJw%2BNcmtLmx2nLsMSBlT7wPK4yPLgluAAH%2BCT8A9qSp0pq2cPukSVUz5CLd%2F9GblgxYQQNsM7HXzm01%2Fs5MPxYlpnjoY0xebycQECsKST6r11rVp46fBRJsKbCIBn8xn9Yft1WSPCuPo0NyanUAikdMESfcrxTvb9VV9Q9xqURgPBVfD4B9iwEqp2G4tBu%2FApB5QnSL4RoE4OTnP3OhpcFRCkuwBnlehw3pWiOepIMxadXXpktscAVUVvGKPHuhJY6CPdQYTzr%2F%2B3FPDGkNgfAPdas5yb3AaYhhTN5CvCUclLves%2FE%2FhF%2FlBeXc08vFS9o2OMqE1abpsxixyG50UcDiwIJBSfDzVCfJnyZD85PbuN4Dp7XWVJkM96hjaajsSOfPqSJuxzRUIdxPQ0ROvbZXIhurZhPIcydOFSs69jt0bSKgtsQ%2FD4J6BXfo4lky13Bp0Jshnc%2F39LhrkPTiJpeMHR8oUJuwVXfv1gqm%2FH62vhJrh4OsMI%2BSzckGOqUBy7mWHyIkgwzzCwggDOu%2Bt%2FyWKtEvLzKRpt7hgRmbMYfCJBH4AdVNvrBn2tKSt0dok1F8KliYuTgdjc9oMWVRmsNlHNpjyaxcZSuP9KouH1XiF21BDVPzrpGHzYjg4V%2FQi8wtUfHoWAXgveJNDkgL9tMgN8ruLnLUgvSov%2B4WqEFWSWS2UaTPlLozRLuMhJZwZzviKfVOYxC9mDYGU%2Bet4%2BKOGWVj&X-Amz-Signature=1dae457508c4a6f1766e6ae73d3d421e97cb4001079ba309e61a4554d2ef35d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VX3Z25%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T223713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn8pEUKOz3XgXbuInp4%2BU5%2BisWZVfAi3I06vxwkPZbpAIgbnBekhMPSBYAGYArXw2BIDXaAT4ZZld%2Bkspl36irERYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLSLKxRWHM7Txu1t9CrcA8i5loe8uXC14lXXBakkHkLFRBUN3PotG7%2BOlNQ7ewmd0l%2FaYlbu6PKNXvA5vfniEzcqY6eCds8NaBdjbBvlzukuMkeT3DZ%2FdUDNXBk8PhDlAHqvZquEDsqVWfKvukkTmTXjm0pRMfJw%2BNcmtLmx2nLsMSBlT7wPK4yPLgluAAH%2BCT8A9qSp0pq2cPukSVUz5CLd%2F9GblgxYQQNsM7HXzm01%2Fs5MPxYlpnjoY0xebycQECsKST6r11rVp46fBRJsKbCIBn8xn9Yft1WSPCuPo0NyanUAikdMESfcrxTvb9VV9Q9xqURgPBVfD4B9iwEqp2G4tBu%2FApB5QnSL4RoE4OTnP3OhpcFRCkuwBnlehw3pWiOepIMxadXXpktscAVUVvGKPHuhJY6CPdQYTzr%2F%2B3FPDGkNgfAPdas5yb3AaYhhTN5CvCUclLves%2FE%2FhF%2FlBeXc08vFS9o2OMqE1abpsxixyG50UcDiwIJBSfDzVCfJnyZD85PbuN4Dp7XWVJkM96hjaajsSOfPqSJuxzRUIdxPQ0ROvbZXIhurZhPIcydOFSs69jt0bSKgtsQ%2FD4J6BXfo4lky13Bp0Jshnc%2F39LhrkPTiJpeMHR8oUJuwVXfv1gqm%2FH62vhJrh4OsMI%2BSzckGOqUBy7mWHyIkgwzzCwggDOu%2Bt%2FyWKtEvLzKRpt7hgRmbMYfCJBH4AdVNvrBn2tKSt0dok1F8KliYuTgdjc9oMWVRmsNlHNpjyaxcZSuP9KouH1XiF21BDVPzrpGHzYjg4V%2FQi8wtUfHoWAXgveJNDkgL9tMgN8ruLnLUgvSov%2B4WqEFWSWS2UaTPlLozRLuMhJZwZzviKfVOYxC9mDYGU%2Bet4%2BKOGWVj&X-Amz-Signature=b7f002114bb810fbb368d2462b47a3e6d4c20654fbd20e813af3b3a44968b8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

