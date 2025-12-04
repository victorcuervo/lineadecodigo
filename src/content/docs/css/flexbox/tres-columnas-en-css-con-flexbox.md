---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIG7GHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKRDw%2Bm%2FwgX%2BjlUiqV7s%2FRcGeFWjTcjSxmAWLhMiS6TAiBQ6DxHLVBKWY6WKMFsO7ZMDmkBK67%2BIaVBSlr%2FwC7ytCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMi9emnEccSkLKhQGJKtwD1s%2FU9OwzUMsSfdqClnM8rNWcaxo9a5DnGCMbPCl5%2FelHsgvsJ%2Fpzkh2MmQzaMUU26crghVnD%2FlHK29Wdc07gIgtLpy4e8PKjOI1wcieBJph9XJMrOj5bckm1Duu4lQZ%2Ffl6sfSJYdM7raNfhbu1zMsPHF070giOYDHImAP2MT9CxVGBiuSH0E81AIbV6HMifc%2FRDZzZWwiNFOE5f%2FGmTe3y0IcptYUShvlrfIqSiMaX1YOWW5JGZ7VSp3R6xZsOYl6dGRYHiTHB1EL8tO456UZF%2BWJylV550ylrmsoLVQ%2FX9dUw47EvNvAYrYQEWqY8ExlhviH3XXfPjUx0IWm23SYNnteZelj8M1dXCFx2Qx80eszl%2BS8el3%2F7FWCU%2BaOru%2F9ePIPyeDiNvxf2bDBN1S0qNxpc1rdegBXBNx8lfEouE03BylgBwNCYOujjoejPGJbxrIlRb3wZy4WQ6h7wjI1%2FcHBJJbZg532oNvoFiAZAneLNhxsfPy6ZsLQLrxG2T1uruySIuQ2pqfmVFzx7WtxqEH8g1cL1TC9Cy3Vz6XYpAEutI9aPSykTEjasUsSjxGn0bVQtaX4liOB0xXOh54Aei%2FAdBg49QgoBjlN%2Fi5jaTGMxzEM2p5zyaahEwz9vGyQY6pgHAczVsr%2BsfTlEHJXJR00%2BKxBlIx8BXa4%2BI5kbLEX9lupCl1x0qJH62rt3EgnURY%2FhD6ivIZPQpLeCz1bPsbn0mdCG1vNo2BiSBILui4QaDQbxqGDHVelXK2e%2BVRTV7toRqWRKRXixStzCOAaffkE7R2OqEJ%2B4CC%2FMPcdIkahabWdtjtbj6mO2K1H3xf5dC9s7jtNzDDvkdH%2FrQ6gpbHdfRHiHSwpVj&X-Amz-Signature=ae9985e5544cd2810f87cea94d7a073e450d011bb3d9616d39996077fb306512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIG7GHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKRDw%2Bm%2FwgX%2BjlUiqV7s%2FRcGeFWjTcjSxmAWLhMiS6TAiBQ6DxHLVBKWY6WKMFsO7ZMDmkBK67%2BIaVBSlr%2FwC7ytCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMi9emnEccSkLKhQGJKtwD1s%2FU9OwzUMsSfdqClnM8rNWcaxo9a5DnGCMbPCl5%2FelHsgvsJ%2Fpzkh2MmQzaMUU26crghVnD%2FlHK29Wdc07gIgtLpy4e8PKjOI1wcieBJph9XJMrOj5bckm1Duu4lQZ%2Ffl6sfSJYdM7raNfhbu1zMsPHF070giOYDHImAP2MT9CxVGBiuSH0E81AIbV6HMifc%2FRDZzZWwiNFOE5f%2FGmTe3y0IcptYUShvlrfIqSiMaX1YOWW5JGZ7VSp3R6xZsOYl6dGRYHiTHB1EL8tO456UZF%2BWJylV550ylrmsoLVQ%2FX9dUw47EvNvAYrYQEWqY8ExlhviH3XXfPjUx0IWm23SYNnteZelj8M1dXCFx2Qx80eszl%2BS8el3%2F7FWCU%2BaOru%2F9ePIPyeDiNvxf2bDBN1S0qNxpc1rdegBXBNx8lfEouE03BylgBwNCYOujjoejPGJbxrIlRb3wZy4WQ6h7wjI1%2FcHBJJbZg532oNvoFiAZAneLNhxsfPy6ZsLQLrxG2T1uruySIuQ2pqfmVFzx7WtxqEH8g1cL1TC9Cy3Vz6XYpAEutI9aPSykTEjasUsSjxGn0bVQtaX4liOB0xXOh54Aei%2FAdBg49QgoBjlN%2Fi5jaTGMxzEM2p5zyaahEwz9vGyQY6pgHAczVsr%2BsfTlEHJXJR00%2BKxBlIx8BXa4%2BI5kbLEX9lupCl1x0qJH62rt3EgnURY%2FhD6ivIZPQpLeCz1bPsbn0mdCG1vNo2BiSBILui4QaDQbxqGDHVelXK2e%2BVRTV7toRqWRKRXixStzCOAaffkE7R2OqEJ%2B4CC%2FMPcdIkahabWdtjtbj6mO2K1H3xf5dC9s7jtNzDDvkdH%2FrQ6gpbHdfRHiHSwpVj&X-Amz-Signature=b3add5b10b0bf0149b96956cf72b65d97eb36c9bb537916abc321925a6f86558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

