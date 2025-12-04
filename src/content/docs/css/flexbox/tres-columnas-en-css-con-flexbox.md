---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTWLV23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCdBcQXGJOmKWVge0nAU5YPhC3WYMVBZeTCPTLVHLZohQIgAuiPuAHl4%2F1W1gaBcbTrxxB9rViFc%2BQNABS9n4ortjgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDISdt2dsEhuWfx7vEircA1kafzjNOVuvXzz1ddmG8MkSRQtNzkV7rWT2jaSDOFrx7LlcHgvUIEsINvu1PVkIYQWICxb0gZsktQRjE%2BF6K6758vFI1owbH2jhXrJPL98JmspowCn1newjBXUMhpdkF0bp8S0569cBlUSATa%2FjaiiWDlatt32WX3BNKBQ8R8ibg1zTVnj556CbvkCHGh%2BehERxNwW71Z9opPEvUbwKUoId4G4JPcPWPRvaVHuVUud0lwVp7knxFJzREFh%2BauIE9f%2FCMfG%2FEdVXvtsnWukhYPhggdt26el%2FSTcXFbr08sbHX8nYTn0M1OaAwccBGTVstF6J92wvGylHLhIsoImWAjTlKqi0ajh5mlaOWzAKT7oAN7%2FVZmlySa0t69S0EMw1cJnIz8nObjngOVfBB4nDeghPje2oKz2a7wvKgFrOBu2hvV1GCO%2FtWddgNtvH5Zn79sExEDTB72rC1OdZLfabGv53BVreDV533pnXE9WB66EiB3EJ5e%2FjGDO4E3FPkCXqAc3KlImpvoG%2FvRLeSkFYWPEmA2Hm4Usgtq8q7qF0yvcOgDWY%2FfbLrd67UKpTlJG2KPRt8vN3zoCgu4HfZ9k8%2FPQ7g9T%2FNWmZD%2Fx2UesMANB9B85x9PnehSavXs4cMJfJxckGOqUBCrPKxDKStKB6gaztEmHoOOhkLi4bnMaIMXUP6B0Ywb446oXuoHYr4fFvCDoIcooz3LPjHZcRm1upzm2NVKlBI%2FYEpi8oWW0l6CNXvPuj03EucLRm52fOUa1QfF3J0n4qCQwQZBVuMjWvJiBueCFsGOUT4XsNaVXfHOl7qOljYIjf2G9rH2X%2BP9NRY7rSPNA5VP5ORPo0Nhl7hbTCLnPZvTg8WtEg&X-Amz-Signature=caaf589d0457aba41c8d268ba8fa14a12331d52698b20eeddce04efb5ff0668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PTWLV23%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCdBcQXGJOmKWVge0nAU5YPhC3WYMVBZeTCPTLVHLZohQIgAuiPuAHl4%2F1W1gaBcbTrxxB9rViFc%2BQNABS9n4ortjgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDISdt2dsEhuWfx7vEircA1kafzjNOVuvXzz1ddmG8MkSRQtNzkV7rWT2jaSDOFrx7LlcHgvUIEsINvu1PVkIYQWICxb0gZsktQRjE%2BF6K6758vFI1owbH2jhXrJPL98JmspowCn1newjBXUMhpdkF0bp8S0569cBlUSATa%2FjaiiWDlatt32WX3BNKBQ8R8ibg1zTVnj556CbvkCHGh%2BehERxNwW71Z9opPEvUbwKUoId4G4JPcPWPRvaVHuVUud0lwVp7knxFJzREFh%2BauIE9f%2FCMfG%2FEdVXvtsnWukhYPhggdt26el%2FSTcXFbr08sbHX8nYTn0M1OaAwccBGTVstF6J92wvGylHLhIsoImWAjTlKqi0ajh5mlaOWzAKT7oAN7%2FVZmlySa0t69S0EMw1cJnIz8nObjngOVfBB4nDeghPje2oKz2a7wvKgFrOBu2hvV1GCO%2FtWddgNtvH5Zn79sExEDTB72rC1OdZLfabGv53BVreDV533pnXE9WB66EiB3EJ5e%2FjGDO4E3FPkCXqAc3KlImpvoG%2FvRLeSkFYWPEmA2Hm4Usgtq8q7qF0yvcOgDWY%2FfbLrd67UKpTlJG2KPRt8vN3zoCgu4HfZ9k8%2FPQ7g9T%2FNWmZD%2Fx2UesMANB9B85x9PnehSavXs4cMJfJxckGOqUBCrPKxDKStKB6gaztEmHoOOhkLi4bnMaIMXUP6B0Ywb446oXuoHYr4fFvCDoIcooz3LPjHZcRm1upzm2NVKlBI%2FYEpi8oWW0l6CNXvPuj03EucLRm52fOUa1QfF3J0n4qCQwQZBVuMjWvJiBueCFsGOUT4XsNaVXfHOl7qOljYIjf2G9rH2X%2BP9NRY7rSPNA5VP5ORPo0Nhl7hbTCLnPZvTg8WtEg&X-Amz-Signature=58b8e3ca43eebaacca5abaa92c4ab8441df8e734bfc4f78aa610aa654f77ffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

