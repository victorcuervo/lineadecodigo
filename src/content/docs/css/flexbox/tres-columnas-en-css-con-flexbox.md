---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULFONSK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYJ171s%2B4XBP8mWov4FRchN9nc4yvPB%2F%2ByUDibPDixfwIgP7dB4BObKwURfF2lnujVL31Le7i%2B51QS6hAC%2B4fghKwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrZJZIiuNERvDB3pircA%2F9hi9%2FB4TyPrP1RohgQ5t3mQf14LYhmgfciXvr7kQ9rh6PXUBwtIKQ0b9PGgMMu1e4FxaKFHc4RWWGOECp1R2UfmBWthzEcmhrAZRYbnBxGcmyLJ%2BzQycY7XZY%2FMmISQwr8ukgX1A7G1%2B0slGpB8c%2Bzl%2FUckXdAU22QXqgPGufNsYQJwBSdmA6S18d9R7ltaS8xX1P3ZLizcxAACxoJvPKaepadeKkM4O7B3ABmkbI732wTBm7JGQmogxklRBYW3FHe5%2FRhAbBw06Ks6zDc8gG1tuZb%2FG0EO5hFyV7SbMUT5w25NpU2UHRQkBOZm%2FsGtoBX88tw2q6LUabd5Uv83FWKq5i95lB5ZTdzjQNAoW147kpFreAoX6iKl%2FgGdntLywE2Qnon9xbGR767V7kMDj1cUa6m0V5Sdo156EzTgTe7MtvWSu2sl1UYJAGTNWhHUOR52jHt5YuWWMc1F1us24Z%2Fjv4sT6gCrSjCYt%2BKPQn7hpQLsaP9vr7ydZlybgMlROHrlvvvHNKsxuM0eayzk9bqWNTy7Ip70juzzdNp99xCK5GgHIpifqSg1cCs2XhQJrTUSx7CQP1cQKsVngeC0FnoZlfV%2FZ7KiecAuxOp2lAEayRvLVu%2FaWvlLHyuMLbu2ckGOqUBtaiDgUdS2g%2Bxo3NPDSODzuuHMb3r1CtwkIKSevCywvCh9xa5q5LJF6zDWS142TcBb0%2F4OvmWmVYP6b5rCSKbTUMqk16C2rW6MGC4vbZGlw4eeFPw5Ap2oT5MiIBBPHSO8Z16T93qeOZ38pFqGiD6GZSg0SgEBKnHbCsia6GZfpNY0%2B0HLJauzgCtqdTy9RwPcfAl6m5HRiHerfc7olLPYiy5dH7o&X-Amz-Signature=a1d0fa1e35b77546de7e488e7a86b21b4d551884c11b4bc55766efd6bd6e16b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UULFONSK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYJ171s%2B4XBP8mWov4FRchN9nc4yvPB%2F%2ByUDibPDixfwIgP7dB4BObKwURfF2lnujVL31Le7i%2B51QS6hAC%2B4fghKwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrZJZIiuNERvDB3pircA%2F9hi9%2FB4TyPrP1RohgQ5t3mQf14LYhmgfciXvr7kQ9rh6PXUBwtIKQ0b9PGgMMu1e4FxaKFHc4RWWGOECp1R2UfmBWthzEcmhrAZRYbnBxGcmyLJ%2BzQycY7XZY%2FMmISQwr8ukgX1A7G1%2B0slGpB8c%2Bzl%2FUckXdAU22QXqgPGufNsYQJwBSdmA6S18d9R7ltaS8xX1P3ZLizcxAACxoJvPKaepadeKkM4O7B3ABmkbI732wTBm7JGQmogxklRBYW3FHe5%2FRhAbBw06Ks6zDc8gG1tuZb%2FG0EO5hFyV7SbMUT5w25NpU2UHRQkBOZm%2FsGtoBX88tw2q6LUabd5Uv83FWKq5i95lB5ZTdzjQNAoW147kpFreAoX6iKl%2FgGdntLywE2Qnon9xbGR767V7kMDj1cUa6m0V5Sdo156EzTgTe7MtvWSu2sl1UYJAGTNWhHUOR52jHt5YuWWMc1F1us24Z%2Fjv4sT6gCrSjCYt%2BKPQn7hpQLsaP9vr7ydZlybgMlROHrlvvvHNKsxuM0eayzk9bqWNTy7Ip70juzzdNp99xCK5GgHIpifqSg1cCs2XhQJrTUSx7CQP1cQKsVngeC0FnoZlfV%2FZ7KiecAuxOp2lAEayRvLVu%2FaWvlLHyuMLbu2ckGOqUBtaiDgUdS2g%2Bxo3NPDSODzuuHMb3r1CtwkIKSevCywvCh9xa5q5LJF6zDWS142TcBb0%2F4OvmWmVYP6b5rCSKbTUMqk16C2rW6MGC4vbZGlw4eeFPw5Ap2oT5MiIBBPHSO8Z16T93qeOZ38pFqGiD6GZSg0SgEBKnHbCsia6GZfpNY0%2B0HLJauzgCtqdTy9RwPcfAl6m5HRiHerfc7olLPYiy5dH7o&X-Amz-Signature=7a987f6664ac539e4b7fc62129cac39d73181c250ad72e76bca27d1f40172d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

