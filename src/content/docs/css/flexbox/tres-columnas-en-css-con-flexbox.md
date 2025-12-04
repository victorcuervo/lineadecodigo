---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQBAB7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBTvP1N07T8htgwQuz9XCx%2FofMEPecWAAG7opUQZb4f8AiEAo9htojQtTBYq8pG5%2B1FglfZUT6%2FmwUzIMTcFwe9jaA0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPUr35IU8bjqSbFigCrcAzPtuOXy7zwwHoKwGVjWPocwHbwVbvKszVztO45wuTTmSNBcrhEDye6aLHEQZjUhg3UFRaSvPdqQQxTn5CDataelhJVrQm0owBDJ5fR54j5NaiAIywcW9JWy1KovUzX3PpSGF0jVrqfX9IDSk%2B2uYI4uobFfsRf71sBTixiPI4mjLZShxY9ceBdL%2Fkt9VYBT3BJl6TyfejKPxL258UNGNG3NJOngbRIldIi4EY5U9pNeo%2Fg4gDsh%2BeJqPKuJg0dQIPE55yU4nkhgclDddBwWdn0AvdMVRBbo31NBDv%2BiqATDUetU%2BkNCeQy%2FB44Pb8yRZftKcJ2RQ0%2F%2FlTb2s0F1zCIWPhefPPHZwcicEQ9iM7qg3mRG1pDnOCRkpXUJb7tlG%2BSWcwukQQ3pG82p5m6DRjH0DYxYNfVf%2BQOHYvXBJsN1cW%2BepxWUYVm4KyGPYybm8f7kUqINGepk%2B%2BrydmIqqc3PHnoTpjSxeAaBUeJRBw56whtyR4arF6HHu3pgJWLXUtsX9Qg%2Fnv6CJLJr%2B4rdxMqnsejgxG7wOS40vGvuf%2FHJw6MEIY3%2Fzj3OtV0J6NYJQ8BIRM2frcoX0DDRGiVjnUL%2Bl3CfEMXCPoXE9e4nJHNdYAhuGUIRvumF8u33MInnxckGOqUBCvHkxpfEobBpOY5g1YQKOoXimB%2BN0O7KTmwI6ZcFetOA780aKelMu3m8dXBSnOquC52wFLeXk62h5HQYa0pFBrmhoaJGDciGuT8y4fD8fzN2lZyFwQHOMjqpGKGLFtXFMwTGIaFrCyRzqlJYNOzqeKkNJG18oDZw%2BI433qaFXJmmzsLYWbS0DnFK4Yh%2B0vWhv8Wt1%2FMYffDtadR9MTs%2FniwKUFxT&X-Amz-Signature=a6e2ef3249b12934cc86403c2d60a3e2d36dfe77acb09e955f7bf49f8e4919fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEQBAB7T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIBTvP1N07T8htgwQuz9XCx%2FofMEPecWAAG7opUQZb4f8AiEAo9htojQtTBYq8pG5%2B1FglfZUT6%2FmwUzIMTcFwe9jaA0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPUr35IU8bjqSbFigCrcAzPtuOXy7zwwHoKwGVjWPocwHbwVbvKszVztO45wuTTmSNBcrhEDye6aLHEQZjUhg3UFRaSvPdqQQxTn5CDataelhJVrQm0owBDJ5fR54j5NaiAIywcW9JWy1KovUzX3PpSGF0jVrqfX9IDSk%2B2uYI4uobFfsRf71sBTixiPI4mjLZShxY9ceBdL%2Fkt9VYBT3BJl6TyfejKPxL258UNGNG3NJOngbRIldIi4EY5U9pNeo%2Fg4gDsh%2BeJqPKuJg0dQIPE55yU4nkhgclDddBwWdn0AvdMVRBbo31NBDv%2BiqATDUetU%2BkNCeQy%2FB44Pb8yRZftKcJ2RQ0%2F%2FlTb2s0F1zCIWPhefPPHZwcicEQ9iM7qg3mRG1pDnOCRkpXUJb7tlG%2BSWcwukQQ3pG82p5m6DRjH0DYxYNfVf%2BQOHYvXBJsN1cW%2BepxWUYVm4KyGPYybm8f7kUqINGepk%2B%2BrydmIqqc3PHnoTpjSxeAaBUeJRBw56whtyR4arF6HHu3pgJWLXUtsX9Qg%2Fnv6CJLJr%2B4rdxMqnsejgxG7wOS40vGvuf%2FHJw6MEIY3%2Fzj3OtV0J6NYJQ8BIRM2frcoX0DDRGiVjnUL%2Bl3CfEMXCPoXE9e4nJHNdYAhuGUIRvumF8u33MInnxckGOqUBCvHkxpfEobBpOY5g1YQKOoXimB%2BN0O7KTmwI6ZcFetOA780aKelMu3m8dXBSnOquC52wFLeXk62h5HQYa0pFBrmhoaJGDciGuT8y4fD8fzN2lZyFwQHOMjqpGKGLFtXFMwTGIaFrCyRzqlJYNOzqeKkNJG18oDZw%2BI433qaFXJmmzsLYWbS0DnFK4Yh%2B0vWhv8Wt1%2FMYffDtadR9MTs%2FniwKUFxT&X-Amz-Signature=deeb566aa06f2736c4c4100c704710bcb459ce9d1582f1c9ea2523d531cba9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

