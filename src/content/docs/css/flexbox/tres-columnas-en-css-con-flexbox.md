---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZOCHO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhThO4HPGQlJwLw5tOKO5ObtBi4CsQ6vGpUCxD7JeNbAiEA2Q4QfJ2fu1mf9mnmi8g0G974vQwHJVExbbrcQnsy7PQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOxeGcMlfQLZZwBFMSrcA%2BysCGEAMdAhlY4naeytK8j5Bgx%2FjdsKSwVdy9bIodmZX%2Bd%2BqRLX7dXUA1uDxJhRbobWmXYVMsnx%2BBLZGOqXDA2Qg6yOR%2BJHbx81z9htjXjf4fllNwCDOHuc5P7YalUHvRRBsiox3df8vjuOC%2Fbhgcl6ONmmOn1WgUMdyu57IVwYUfmqdwVMfX6RAenYlJgG3yOfSmPNh1NS5bSGdmsnXfyGNeQOtLK%2FZVrifR4kzKvO6nVpCsaCL4BtPzh%2FnmtAxFfXtbmxPBB0qVkLdgNPBrGr6rIQW%2F0yjAki5JPN3rg%2BmkfgB8a6NyN6JiDfrYppitCFrVsEoEQEQgYyN16GMObSLDeJZA35%2B6Dp2sl04I%2FmkZsK55e2N7m51GKxC8TCOtmtVt1hMIV2lGnwlVJOnG9rQxGNZ6M%2BP7V6b8ENZZTxIV2p8%2BIQT9w6EJdPWkUHrRaXGR0RC7%2BhAhRUjEcrXW4AkCmDEaHdV2Q0rU5gwAnrAbjzJSETM5%2FlFUP8nJ78MUWE6ftdLk1Fs%2BiElbsz4YJLadUFYNqntCY8VhpyfzmtFRg1L633QDG2%2B%2FBcrEYp0hCUkx2%2B3Rupd1ns%2BPCWoMUBlNWurbVnWIWuuLBWmpFG74Ig6%2FUDOErtEw%2BAMK%2FezskGOqUBkuwLY2OjGOPCbRNq74%2FnWbIAoJCAOSvctNM5vpaP%2B1BoZpU%2B0GAZMCAUvjwAMp0wM8dGMmBj6%2FL8rZNg4gJoTee7qvgF%2Bs6MDgFbrTKrW2SahiiLbh%2BMmNstgL9h%2FOsd4IAVX9Mej9KSXotv4WAzLI3JIU9TZIMFO0lP6SZ8IMj2dDXjAZh3FwzfJGJYXEOGqnTcjdyUgAMIWzJ8lrGfjK38RXQH&X-Amz-Signature=0d715388b1cd3fdcf455474f4ac3339432fcb016ab9682c75cf8bc13bf931695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SZOCHO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhThO4HPGQlJwLw5tOKO5ObtBi4CsQ6vGpUCxD7JeNbAiEA2Q4QfJ2fu1mf9mnmi8g0G974vQwHJVExbbrcQnsy7PQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOxeGcMlfQLZZwBFMSrcA%2BysCGEAMdAhlY4naeytK8j5Bgx%2FjdsKSwVdy9bIodmZX%2Bd%2BqRLX7dXUA1uDxJhRbobWmXYVMsnx%2BBLZGOqXDA2Qg6yOR%2BJHbx81z9htjXjf4fllNwCDOHuc5P7YalUHvRRBsiox3df8vjuOC%2Fbhgcl6ONmmOn1WgUMdyu57IVwYUfmqdwVMfX6RAenYlJgG3yOfSmPNh1NS5bSGdmsnXfyGNeQOtLK%2FZVrifR4kzKvO6nVpCsaCL4BtPzh%2FnmtAxFfXtbmxPBB0qVkLdgNPBrGr6rIQW%2F0yjAki5JPN3rg%2BmkfgB8a6NyN6JiDfrYppitCFrVsEoEQEQgYyN16GMObSLDeJZA35%2B6Dp2sl04I%2FmkZsK55e2N7m51GKxC8TCOtmtVt1hMIV2lGnwlVJOnG9rQxGNZ6M%2BP7V6b8ENZZTxIV2p8%2BIQT9w6EJdPWkUHrRaXGR0RC7%2BhAhRUjEcrXW4AkCmDEaHdV2Q0rU5gwAnrAbjzJSETM5%2FlFUP8nJ78MUWE6ftdLk1Fs%2BiElbsz4YJLadUFYNqntCY8VhpyfzmtFRg1L633QDG2%2B%2FBcrEYp0hCUkx2%2B3Rupd1ns%2BPCWoMUBlNWurbVnWIWuuLBWmpFG74Ig6%2FUDOErtEw%2BAMK%2FezskGOqUBkuwLY2OjGOPCbRNq74%2FnWbIAoJCAOSvctNM5vpaP%2B1BoZpU%2B0GAZMCAUvjwAMp0wM8dGMmBj6%2FL8rZNg4gJoTee7qvgF%2Bs6MDgFbrTKrW2SahiiLbh%2BMmNstgL9h%2FOsd4IAVX9Mej9KSXotv4WAzLI3JIU9TZIMFO0lP6SZ8IMj2dDXjAZh3FwzfJGJYXEOGqnTcjdyUgAMIWzJ8lrGfjK38RXQH&X-Amz-Signature=089f092e7491deeda70ba55f5573c75c8d2d0926b98237c8b8e74429905756e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

