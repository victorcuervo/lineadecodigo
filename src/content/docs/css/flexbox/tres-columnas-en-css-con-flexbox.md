---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAJ567V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmzXKjERzLG1wI35UyGoBvzabXG9J2JKXRmUEY%2BmPXMAiEA97DC6FxzvNqDBjhUunfScqCpQnRmiABfiUQHxdPhEfgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BIevHjWvN7FxJBoCrcA8%2F%2BgEO4Gc1av6%2Bth2BlBjAHskFjAlFoS8vRE%2BVMwQ4mEn330YkVbwelNdUMF1xREq2iNFqJZJabsl8aq%2BA3qFCTEr0OBkC0IL5hYup%2BjCrdrRGVkPNnLvQPxDshvUnZxzTxQrKseiZdTz8p4xdnDFlK1H1oBF796MJy4LAabSahKc4pjnc8tsSZyxcggo5crVTY%2F2oEVEYRFYVSLpdtAj1bx6%2F%2FQJWHO1sZslzxIfv0xU0LrjkBa6OkHGkeK9Kbi6zN01hjUErO0iB%2FjJxdmGak3TDicUyTKi%2BLJrND6pTWHu3M3McLoZofsfX6ta08l4jPmABSoqIk2ef6PTwVmocY7GvHudHxvPIzZ%2BmOjc9taqR%2BdQ5O8rlUOJteMsRCFGVafsoI7IyYc0jbNNeU6e3W8vtiRqn%2BoPJo2U6AcDnec47stWXK79b53GvnCRCp3NAgbzhtQXIryZjnozFsMFZfjt9Kv6oCOoTte%2BBWmuRA%2FLEZaDZFSXxvxQjM6Zj1EwcbtGI2vQCWnufPKP0iZMMwwkKXIkI576GhFGnwKjJ%2FDZpsnOwvIR8E4THCsYsW1DzSa4E5L0yOz4wei1os0KsZo9Ww9lInF20ojw42gOCY4%2F2dg8tYhffqjEsxMJ%2BU2ckGOqUB%2FgOftSro60coLHv3GuydZZqPZ7fX%2BoDvbegeXqb50%2BiUorKPMH%2BJchQFfMQ%2Bg7UFeCj9LcUMduESbuMU9EbON8XkhCKfEEEChsG3r53327kwTgSPyjvdvy%2F0tt%2BaMPzdCfzQEGbch%2FF9NA8KFQL2GDdFKoxx4H6jRHJaS8UzjyVXCzhTGJWaJk7cx2IB5UVOJ3XQr69o%2F60dP%2Fgnx4Oy6nb%2FFy9J&X-Amz-Signature=14a1ec4ee03b731127f4c73c8cc4637ac085ddeae7019e00e0fa52d5d5b64ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAJ567V%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmzXKjERzLG1wI35UyGoBvzabXG9J2JKXRmUEY%2BmPXMAiEA97DC6FxzvNqDBjhUunfScqCpQnRmiABfiUQHxdPhEfgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BIevHjWvN7FxJBoCrcA8%2F%2BgEO4Gc1av6%2Bth2BlBjAHskFjAlFoS8vRE%2BVMwQ4mEn330YkVbwelNdUMF1xREq2iNFqJZJabsl8aq%2BA3qFCTEr0OBkC0IL5hYup%2BjCrdrRGVkPNnLvQPxDshvUnZxzTxQrKseiZdTz8p4xdnDFlK1H1oBF796MJy4LAabSahKc4pjnc8tsSZyxcggo5crVTY%2F2oEVEYRFYVSLpdtAj1bx6%2F%2FQJWHO1sZslzxIfv0xU0LrjkBa6OkHGkeK9Kbi6zN01hjUErO0iB%2FjJxdmGak3TDicUyTKi%2BLJrND6pTWHu3M3McLoZofsfX6ta08l4jPmABSoqIk2ef6PTwVmocY7GvHudHxvPIzZ%2BmOjc9taqR%2BdQ5O8rlUOJteMsRCFGVafsoI7IyYc0jbNNeU6e3W8vtiRqn%2BoPJo2U6AcDnec47stWXK79b53GvnCRCp3NAgbzhtQXIryZjnozFsMFZfjt9Kv6oCOoTte%2BBWmuRA%2FLEZaDZFSXxvxQjM6Zj1EwcbtGI2vQCWnufPKP0iZMMwwkKXIkI576GhFGnwKjJ%2FDZpsnOwvIR8E4THCsYsW1DzSa4E5L0yOz4wei1os0KsZo9Ww9lInF20ojw42gOCY4%2F2dg8tYhffqjEsxMJ%2BU2ckGOqUB%2FgOftSro60coLHv3GuydZZqPZ7fX%2BoDvbegeXqb50%2BiUorKPMH%2BJchQFfMQ%2Bg7UFeCj9LcUMduESbuMU9EbON8XkhCKfEEEChsG3r53327kwTgSPyjvdvy%2F0tt%2BaMPzdCfzQEGbch%2FF9NA8KFQL2GDdFKoxx4H6jRHJaS8UzjyVXCzhTGJWaJk7cx2IB5UVOJ3XQr69o%2F60dP%2Fgnx4Oy6nb%2FFy9J&X-Amz-Signature=67364236cd5069ac5308b1d46577a218892f221c0a22a59dbd78900354fcb4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

