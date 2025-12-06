---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDP33BB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL0NGcSHtDgkzuTJF3yok75%2B46x6BgHP7tQs5VDDCRBAiEAoGnRKdBKGjXZ675k6pwupwWtcoWLgHxpZ7t%2F0xic%2FNgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE4paAsBOGvYI1RACyrcA%2BxjLbnpf%2BKJEOQNQTnpOPV60zDTdeJcdSrPnl007nADUdwv2pEh%2Fe7AljlLJThDjAe9OXt%2FN%2Fi%2FUWyLGB1zdp0w%2B3pBtJpyq1tkDZ7Zo7pqwWqoMbIXyETJu5SfHuBfR%2Bp0VUt9v%2BlWkWUNWjN57lCEQyxNVAzklSPlYHHJC1pgs3rDuZHZetsjBUOzRuDX6jwyGaW6CfAa3G9p4nXF4K4e6stl0oCLw23PsrySwc9CRhvPw0h4UhTrunnt7vI4PX4Q4klISIx%2BQZFY16UWRHYb%2F3yZgBRRhQKa4Adyc4IMSVVQ2q%2F1Ohl4ANvLVZOLvX7y%2FIfIB5qEBNmM4qIN4IVYZ58iCgI1PZ1kLFXeN0QbCXVyDAoN515RMTsJ%2BgBrfhs2k2VxeR%2F2ANC%2FUtgwcaKjvr6h7vS7RmzIbD7J4v54gFiuzdlzn0CdxLH8o5vto52ZyZdwEd6Trdi6GwlwsSismaQvw7kBQzppsgmciENE4VZFQk2iWOGutLS7x5zSuCJYolb56gIWBvqSoGvqDWFOAv3IX10mjlttBYzs8AL06ALR1oU7lP5aD7v1wRHClLlsLudVUtae4R%2F48Ych2XTh46qLFPIAFC49b66nU2aQ4j3BZY2vwTtrmxhVMKqnzskGOqUBM%2BtQYGRMOmj7xiUq9u%2Fqtzq7hmEeE0k%2BTlUvgcTBshpKna4xnod8opXmpVfAPl8hUDX%2Fm%2Fshc9YVNNymP8CQ4RxiD7xAFyxhyc0s3stkQMi0c2jWVx%2ByJetzPr01deziq2wp4jxtXicqI5AGiTn%2FjiWcRkaMvQMoRBFluxgwMnLy3lOJ1jNi8oBPapu7YYHCH9scUCWG7GzLmCJV2j7VYrGnBrFc&X-Amz-Signature=24b5cdcb043ed25efbf2b92addcee5ea558479537d55cbaf9ad160ac44382c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDP33BB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL0NGcSHtDgkzuTJF3yok75%2B46x6BgHP7tQs5VDDCRBAiEAoGnRKdBKGjXZ675k6pwupwWtcoWLgHxpZ7t%2F0xic%2FNgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDE4paAsBOGvYI1RACyrcA%2BxjLbnpf%2BKJEOQNQTnpOPV60zDTdeJcdSrPnl007nADUdwv2pEh%2Fe7AljlLJThDjAe9OXt%2FN%2Fi%2FUWyLGB1zdp0w%2B3pBtJpyq1tkDZ7Zo7pqwWqoMbIXyETJu5SfHuBfR%2Bp0VUt9v%2BlWkWUNWjN57lCEQyxNVAzklSPlYHHJC1pgs3rDuZHZetsjBUOzRuDX6jwyGaW6CfAa3G9p4nXF4K4e6stl0oCLw23PsrySwc9CRhvPw0h4UhTrunnt7vI4PX4Q4klISIx%2BQZFY16UWRHYb%2F3yZgBRRhQKa4Adyc4IMSVVQ2q%2F1Ohl4ANvLVZOLvX7y%2FIfIB5qEBNmM4qIN4IVYZ58iCgI1PZ1kLFXeN0QbCXVyDAoN515RMTsJ%2BgBrfhs2k2VxeR%2F2ANC%2FUtgwcaKjvr6h7vS7RmzIbD7J4v54gFiuzdlzn0CdxLH8o5vto52ZyZdwEd6Trdi6GwlwsSismaQvw7kBQzppsgmciENE4VZFQk2iWOGutLS7x5zSuCJYolb56gIWBvqSoGvqDWFOAv3IX10mjlttBYzs8AL06ALR1oU7lP5aD7v1wRHClLlsLudVUtae4R%2F48Ych2XTh46qLFPIAFC49b66nU2aQ4j3BZY2vwTtrmxhVMKqnzskGOqUBM%2BtQYGRMOmj7xiUq9u%2Fqtzq7hmEeE0k%2BTlUvgcTBshpKna4xnod8opXmpVfAPl8hUDX%2Fm%2Fshc9YVNNymP8CQ4RxiD7xAFyxhyc0s3stkQMi0c2jWVx%2ByJetzPr01deziq2wp4jxtXicqI5AGiTn%2FjiWcRkaMvQMoRBFluxgwMnLy3lOJ1jNi8oBPapu7YYHCH9scUCWG7GzLmCJV2j7VYrGnBrFc&X-Amz-Signature=455bb2cb0fcd2b3b7bafc2461f3ba85cd37e3b988b6c6a91fcaebeb59af84b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

