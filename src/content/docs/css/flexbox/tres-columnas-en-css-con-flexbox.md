---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LH5TAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHcBZnLVBLJibe8KR8IqwIB%2BLoBcOPx75oZSyObdpwIgaGvW6cnz%2FDHf0Yzi44qZtceVCf7idp0jySep%2FvUbNmsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf0pBdcjYqYRdoJ3yrcA0lqxqwwcRkcyagbrW%2BqMZyq6CDjOF3%2BHmYybCPtG5FmztmZQSUdQ1wEeinC2qvbkyw2xrl1SqcwO32WWxBXbgGimz31RyTtzbDOgbwi8RQBxZJa2tD3ZMDePLKpvF6nWged%2FzlVwhjzrPE8nNV3uIzDA19SB1KplZybNr4SfgLw8S5ESOIdl1SCGIHt4xmbekXIoXr2P1oSgCmPQ%2BXfUrXA0g5TW9GOBCZzRpv%2BxZBpZyWPK6URfTCUyeZ556FysRNPrW1%2FDuwGkXTxQktH7cnwF0aKNkNRIUwe4GHrE8wgyRqi%2B1Sm4N7429GY6u3J8rUUnvmVmwj8eYlg61gFt61PlnTXrpKdk%2BfyJwOxphWp04gdCh8oSuoLa0CATBa0YQ2tj%2BBK5d9Kmfh%2BnLVrYO9k3TSi9yqdaO49QYm6DEGcgO0ZSxfgAPQfwPc9bU97gDkUNsgPMuerdTFDiiXe%2BBxPGa99I%2BFUseFC0Dx94fCKkZxHqFxJrU0XD9YIVsssLuQIRdGDbGaBEamer3sok9QrbBQIFYIXmIb6dPlLDRuYY7DIdNnzaTi%2BhTpadjD5PXD%2FTX9oVs%2F15EQA2FJ1MxcEIjdg0R%2FUwd7WAgqcoyZeNh9BzlHBZcLf1nc5MKaF2MkGOqUBWIyB5x10Deb2Ov0B%2BwI0AXEJYhIXxaOsVZJZsMEk%2FEXoqd8oEQmV0h2MbvZ5Dms%2BkGYaaNeFMyzm9o7x358A6wZ%2FcWkTZr7cEWueUTLtG7tnVmjQ%2FOWVYoL2riEEXfVIgY%2FWkz3f%2BHwht6ot58lraWpiqFyRNC3ggabZQ7BVsO11ocQqIRC7oOC6bqJNJ3%2FkhM2hlbWcfO0OSFiShSWBFkRfZw2U&X-Amz-Signature=219a0b7bfa40aa6da24a0ffc6d2453bfdbdfa62236acdee66f169ddee4fa6d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LH5TAI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHcBZnLVBLJibe8KR8IqwIB%2BLoBcOPx75oZSyObdpwIgaGvW6cnz%2FDHf0Yzi44qZtceVCf7idp0jySep%2FvUbNmsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf0pBdcjYqYRdoJ3yrcA0lqxqwwcRkcyagbrW%2BqMZyq6CDjOF3%2BHmYybCPtG5FmztmZQSUdQ1wEeinC2qvbkyw2xrl1SqcwO32WWxBXbgGimz31RyTtzbDOgbwi8RQBxZJa2tD3ZMDePLKpvF6nWged%2FzlVwhjzrPE8nNV3uIzDA19SB1KplZybNr4SfgLw8S5ESOIdl1SCGIHt4xmbekXIoXr2P1oSgCmPQ%2BXfUrXA0g5TW9GOBCZzRpv%2BxZBpZyWPK6URfTCUyeZ556FysRNPrW1%2FDuwGkXTxQktH7cnwF0aKNkNRIUwe4GHrE8wgyRqi%2B1Sm4N7429GY6u3J8rUUnvmVmwj8eYlg61gFt61PlnTXrpKdk%2BfyJwOxphWp04gdCh8oSuoLa0CATBa0YQ2tj%2BBK5d9Kmfh%2BnLVrYO9k3TSi9yqdaO49QYm6DEGcgO0ZSxfgAPQfwPc9bU97gDkUNsgPMuerdTFDiiXe%2BBxPGa99I%2BFUseFC0Dx94fCKkZxHqFxJrU0XD9YIVsssLuQIRdGDbGaBEamer3sok9QrbBQIFYIXmIb6dPlLDRuYY7DIdNnzaTi%2BhTpadjD5PXD%2FTX9oVs%2F15EQA2FJ1MxcEIjdg0R%2FUwd7WAgqcoyZeNh9BzlHBZcLf1nc5MKaF2MkGOqUBWIyB5x10Deb2Ov0B%2BwI0AXEJYhIXxaOsVZJZsMEk%2FEXoqd8oEQmV0h2MbvZ5Dms%2BkGYaaNeFMyzm9o7x358A6wZ%2FcWkTZr7cEWueUTLtG7tnVmjQ%2FOWVYoL2riEEXfVIgY%2FWkz3f%2BHwht6ot58lraWpiqFyRNC3ggabZQ7BVsO11ocQqIRC7oOC6bqJNJ3%2FkhM2hlbWcfO0OSFiShSWBFkRfZw2U&X-Amz-Signature=77e08e68f3fe65366bbbfb481e77ed8ef5d6241199cde270b573f23fba35bd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

