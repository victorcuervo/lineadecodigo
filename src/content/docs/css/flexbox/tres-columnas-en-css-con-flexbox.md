---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y24H3PS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD%2F5Qwa3TNgLpmAkeNtySREu4cSPiLrqGWO5o8dnUP%2FSwIgOzNoKCRyo52T53Df2o9%2FxG8dVai8fl7gGtmaEG4A2uUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJXTKsuyWMsTdyOoDircA4SlRQjhFhiOpB60IlP%2FOWtv04%2B3uIShZfn5Lh5J1AJQSUU3GELqhprSbZq7GVfhcJVEiH2DR4ZM5Ku8s09ip%2FYZ37cvbZnkDMDsbLxqZqr799zoP7YwT0XOLnBHU20dU7I4Hn8tRQLslWKAuayKl1ogjOzfuhCzx3KPK2DrCCpkeX5WqUcvN36KUzfj1%2FSiecA2cBr7SodXWfd07NT9IHx61hXamjniTcpZ9KypGNPm4YbccMFVixqwenY%2B4Q%2Fyz0kQjvcUq3h5FLlbnomuYVbkD%2BgZGaC%2BRU6UScfJtG1uQEjfnxOeWSI%2BsNFlJ65mdMXeR2pW9we%2Baae8aoqTVTcAz8AIMRSwjS2e21H3yB7ZcmWfrHRX%2BK%2FyGNfLwI20bln1FrDl17YaFO17foB%2BmSANKyecuMfdrmrULUTwZHR8XvirlBLXM%2BMbaXmD71f%2BdX2g%2BO4SrfJRCaU3FIvGytuG9BWSIKuHiaiH2ui3eORJ3sDpJyuYz%2F5rePDj3%2FKoXBrcgE2wHTy0h4RQe6gGJaUdhCVQN4x3Zx664Uc4%2Fv%2BkbmNnf5JxSok13wrUHd0wTIKi75LmeFrIhc1mVa16nFlcIaxHvw2Fod0C4tYl7mH0Mp4mz%2Fc9VXcVk4z4MPfUw8kGOqUBIEE0AYS9aPPLfb7V9p%2BttKFuEVYuTfgOoUF0Bsr73lH847yJ1XEVNusm11AntSyCKQUm%2BiUb8rY89Mb8ataRdkJe%2BVnx4vla1EpA%2FG4WXZ%2FZMZcn1wbX702%2FP4AN4nMpHurQNclOEGsM1BOnT6wwUGaG6vBu1qysVibqdejSVErT0KjvcOfiGRBIxN2VyIMCXT3Out0h9Z5szaViJlpWnSqUP%2FHH&X-Amz-Signature=3030f163bc9d52c7d2029d4c9763674580d40e00ea48ddd614189ebf6f7fa018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y24H3PS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD%2F5Qwa3TNgLpmAkeNtySREu4cSPiLrqGWO5o8dnUP%2FSwIgOzNoKCRyo52T53Df2o9%2FxG8dVai8fl7gGtmaEG4A2uUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJXTKsuyWMsTdyOoDircA4SlRQjhFhiOpB60IlP%2FOWtv04%2B3uIShZfn5Lh5J1AJQSUU3GELqhprSbZq7GVfhcJVEiH2DR4ZM5Ku8s09ip%2FYZ37cvbZnkDMDsbLxqZqr799zoP7YwT0XOLnBHU20dU7I4Hn8tRQLslWKAuayKl1ogjOzfuhCzx3KPK2DrCCpkeX5WqUcvN36KUzfj1%2FSiecA2cBr7SodXWfd07NT9IHx61hXamjniTcpZ9KypGNPm4YbccMFVixqwenY%2B4Q%2Fyz0kQjvcUq3h5FLlbnomuYVbkD%2BgZGaC%2BRU6UScfJtG1uQEjfnxOeWSI%2BsNFlJ65mdMXeR2pW9we%2Baae8aoqTVTcAz8AIMRSwjS2e21H3yB7ZcmWfrHRX%2BK%2FyGNfLwI20bln1FrDl17YaFO17foB%2BmSANKyecuMfdrmrULUTwZHR8XvirlBLXM%2BMbaXmD71f%2BdX2g%2BO4SrfJRCaU3FIvGytuG9BWSIKuHiaiH2ui3eORJ3sDpJyuYz%2F5rePDj3%2FKoXBrcgE2wHTy0h4RQe6gGJaUdhCVQN4x3Zx664Uc4%2Fv%2BkbmNnf5JxSok13wrUHd0wTIKi75LmeFrIhc1mVa16nFlcIaxHvw2Fod0C4tYl7mH0Mp4mz%2Fc9VXcVk4z4MPfUw8kGOqUBIEE0AYS9aPPLfb7V9p%2BttKFuEVYuTfgOoUF0Bsr73lH847yJ1XEVNusm11AntSyCKQUm%2BiUb8rY89Mb8ataRdkJe%2BVnx4vla1EpA%2FG4WXZ%2FZMZcn1wbX702%2FP4AN4nMpHurQNclOEGsM1BOnT6wwUGaG6vBu1qysVibqdejSVErT0KjvcOfiGRBIxN2VyIMCXT3Out0h9Z5szaViJlpWnSqUP%2FHH&X-Amz-Signature=14a6cf397a1aaad62c36be2bf5cb529815e8e0c0a59c6aea7b6979686a8a9679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

