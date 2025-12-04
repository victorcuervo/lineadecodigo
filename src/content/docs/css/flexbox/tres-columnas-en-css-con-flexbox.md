---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJJSLYY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAJXb6%2FZlu%2BxJSfWnGaCDyeq98cUkMzPjEBpA39shSzQAiEAjIboSpGzcYzrWmATrZE4g5UQ3XxHSBobdy9W2isRcf0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE%2F7Qbrln0%2BWMGCqlCrcAxmsS8xjxV598elttnNPBbQY6rMf6Kaks0yZU9v%2FGdEtHe5mxgl6PcIbEmUt89fy95zyc9AHSH51Grc88nXWmz3mwJyJ%2FEa98CX%2BbCxpvHOn4M18KhA7HHMc66gjINuRjhRtkW0hxtT079fqfEaa9X2s51DALNKpDt89lHU5h7y8HcnUoSCLEOBgD2C%2BmEgmKlxPg5yHaLzzRO%2FIqvQpcI71aT8hb164VnQ3ZDw6%2FFgCG22FOBzcK2AtYY%2FEg3TeANQNkbjpcxfxj4OQ3dL1OLBh7Fq7Er1FNUCKjWRaYlJJD40fFzu0JWzofXCDmj2aU1ygCygUCPiCJVeXu7r82%2BFPni6WpQeiCWC%2BiKuWflvs8O534TgThHin2dbkqUHACEwN6cwnbj0PhOqhNKMLF2P6ZxiuY%2B3T3cBSGwUM3rNBbKPnxz9ptD3MqDzV30LRG5krSHjVa6KzeAc58CmUE8a7OMmpl8M4xr%2BPyZ3P70Uoet9CNlUpLVNF7kHikunh5RyxhFvJRO011vN2TTeMRIBNwr2gskYUhScVColO15bWWzLUEHS3vmBuYmtXZS8%2B39dggzyKRtLEVRjjNZSWyyb1H3d15Nhn8Z7OyGiy%2F9HQeh70OD3sKi2%2BE%2F%2FOMIKhxskGOqUBzEsxJurjlt59ihxAhqnEfm05cKQFZkgldfMhKsXGSC1dNZSo%2BnCO6LHs29HRTW%2FIO3kmVH51jdPiTb%2BFEMTifaQgU9E7m5qqK8vpcA5jDRSXR5oDBYr7U6lCOSl80UJV%2Fq11GJ%2Bah4Ea3Am4GjgQ9DzbGJAoUov7JV9Wt0JAV7c8u1tdGUZVKTwthvnd4%2BrGOciBj%2Fey8exS3aJJX38nTDYf3z3y&X-Amz-Signature=a9ce6a66d6f742c50b8f96c4b91e1ae2c95ed135bdcd055128e8a970e0e3e0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HJJSLYY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIAJXb6%2FZlu%2BxJSfWnGaCDyeq98cUkMzPjEBpA39shSzQAiEAjIboSpGzcYzrWmATrZE4g5UQ3XxHSBobdy9W2isRcf0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE%2F7Qbrln0%2BWMGCqlCrcAxmsS8xjxV598elttnNPBbQY6rMf6Kaks0yZU9v%2FGdEtHe5mxgl6PcIbEmUt89fy95zyc9AHSH51Grc88nXWmz3mwJyJ%2FEa98CX%2BbCxpvHOn4M18KhA7HHMc66gjINuRjhRtkW0hxtT079fqfEaa9X2s51DALNKpDt89lHU5h7y8HcnUoSCLEOBgD2C%2BmEgmKlxPg5yHaLzzRO%2FIqvQpcI71aT8hb164VnQ3ZDw6%2FFgCG22FOBzcK2AtYY%2FEg3TeANQNkbjpcxfxj4OQ3dL1OLBh7Fq7Er1FNUCKjWRaYlJJD40fFzu0JWzofXCDmj2aU1ygCygUCPiCJVeXu7r82%2BFPni6WpQeiCWC%2BiKuWflvs8O534TgThHin2dbkqUHACEwN6cwnbj0PhOqhNKMLF2P6ZxiuY%2B3T3cBSGwUM3rNBbKPnxz9ptD3MqDzV30LRG5krSHjVa6KzeAc58CmUE8a7OMmpl8M4xr%2BPyZ3P70Uoet9CNlUpLVNF7kHikunh5RyxhFvJRO011vN2TTeMRIBNwr2gskYUhScVColO15bWWzLUEHS3vmBuYmtXZS8%2B39dggzyKRtLEVRjjNZSWyyb1H3d15Nhn8Z7OyGiy%2F9HQeh70OD3sKi2%2BE%2F%2FOMIKhxskGOqUBzEsxJurjlt59ihxAhqnEfm05cKQFZkgldfMhKsXGSC1dNZSo%2BnCO6LHs29HRTW%2FIO3kmVH51jdPiTb%2BFEMTifaQgU9E7m5qqK8vpcA5jDRSXR5oDBYr7U6lCOSl80UJV%2Fq11GJ%2Bah4Ea3Am4GjgQ9DzbGJAoUov7JV9Wt0JAV7c8u1tdGUZVKTwthvnd4%2BrGOciBj%2Fey8exS3aJJX38nTDYf3z3y&X-Amz-Signature=68e72bd65f4aea9f37acc716e3b992bc7221a55a64a0c42f8ef3ade3fd8ec6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

