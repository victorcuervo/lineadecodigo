---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3SKJCP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDld9dwLsNQsk38Uxy4PIgJc9pOZ4gL%2FOhBLQq9Zjt2iAiAkx%2FbA%2BF%2BxR7qEzuw14T%2FHvm0G2QxaeNkLDxJiW%2FZneir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMO1pXHnOslcH3VJ5dKtwD04wEN4nQ6fvSU7rWvmLNppAmSzKEzuO8%2F2AlzO7LA5qUT41tvoWrLzsA4SH8JekvNF8E4R9Ra55T8n10W84pGl0Hx2Ia7fduyzgttTclT3%2BkLQXZlAw48CGADvKVa88xQtJCMfYXTDrrNstIEcB58bYNgAiJjb%2BFCe1mONcoHinOS1Ce8GeB9NjPLzT0tI9x8%2F2oWSlOgSl%2Bs3V7Am8kzRLfPjGFv5rZMd%2Fb9%2BJOjqhY7ZAoUC3%2FD6wD%2F2kMwVnKQw2bm9%2FXI2QsWhnnULHoLKWtLNQXwuUKqeFXWSa62k4eOIMRz5LUnN7va1j75muSgeRT28ld9MsAjJtJbb2e53BcQGoxf3uf9sFPFi8Dy%2Fwzk44LQ3%2F%2FqyKH5oxsUtq9M1bHprsWUEbsZiLPSkQpEKBz1pF%2BSjiqEO9lI3GxjGye9LycC1VRJk4%2FO%2BOM0vmvxd5%2FmtBU6oVjpa8%2Beo0miqJJVCi8IuLKi%2F%2BhhDp4GfaEEYd0RyNUQN%2FpDwHB7OPoOOKHCMkPpmYxpvyJQWz9two5Dy45P3VxHNXoZXFONzO8v2NnoZ%2FPXFH0lZar6sIlMusAlpY6KcZwKdk4An4b2LPYreqwimQHG6zAWgtrvi7YsMLN87oFAI0wLfMw%2F53PyQY6pgFzCADskoZ%2FwQ%2FE0p8EEFnI%2FQgrF%2F2b40IrPfdjwDVyLYAWi1BRCP%2FpPc0yvC8tyajFHVxvWgEB44L%2FtHEmSe2G6P%2B%2FN67T8g9jdgeBeRN3RUEtGFh3xBKY5nW8ch3fAVIVneo7I8r%2BkRvC51wIlcJqZrejkx4npOoCUekrZgw2TdYj7mqd6d1ZPXlvvTKHa1d8ms5T8hfd0rFmaJTb3vWwuaTWjYFY&X-Amz-Signature=d767a8f4987421772b3431884afa072378c6a8fc10dd646f21e6c0dd6245b8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3SKJCP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDld9dwLsNQsk38Uxy4PIgJc9pOZ4gL%2FOhBLQq9Zjt2iAiAkx%2FbA%2BF%2BxR7qEzuw14T%2FHvm0G2QxaeNkLDxJiW%2FZneir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMO1pXHnOslcH3VJ5dKtwD04wEN4nQ6fvSU7rWvmLNppAmSzKEzuO8%2F2AlzO7LA5qUT41tvoWrLzsA4SH8JekvNF8E4R9Ra55T8n10W84pGl0Hx2Ia7fduyzgttTclT3%2BkLQXZlAw48CGADvKVa88xQtJCMfYXTDrrNstIEcB58bYNgAiJjb%2BFCe1mONcoHinOS1Ce8GeB9NjPLzT0tI9x8%2F2oWSlOgSl%2Bs3V7Am8kzRLfPjGFv5rZMd%2Fb9%2BJOjqhY7ZAoUC3%2FD6wD%2F2kMwVnKQw2bm9%2FXI2QsWhnnULHoLKWtLNQXwuUKqeFXWSa62k4eOIMRz5LUnN7va1j75muSgeRT28ld9MsAjJtJbb2e53BcQGoxf3uf9sFPFi8Dy%2Fwzk44LQ3%2F%2FqyKH5oxsUtq9M1bHprsWUEbsZiLPSkQpEKBz1pF%2BSjiqEO9lI3GxjGye9LycC1VRJk4%2FO%2BOM0vmvxd5%2FmtBU6oVjpa8%2Beo0miqJJVCi8IuLKi%2F%2BhhDp4GfaEEYd0RyNUQN%2FpDwHB7OPoOOKHCMkPpmYxpvyJQWz9two5Dy45P3VxHNXoZXFONzO8v2NnoZ%2FPXFH0lZar6sIlMusAlpY6KcZwKdk4An4b2LPYreqwimQHG6zAWgtrvi7YsMLN87oFAI0wLfMw%2F53PyQY6pgFzCADskoZ%2FwQ%2FE0p8EEFnI%2FQgrF%2F2b40IrPfdjwDVyLYAWi1BRCP%2FpPc0yvC8tyajFHVxvWgEB44L%2FtHEmSe2G6P%2B%2FN67T8g9jdgeBeRN3RUEtGFh3xBKY5nW8ch3fAVIVneo7I8r%2BkRvC51wIlcJqZrejkx4npOoCUekrZgw2TdYj7mqd6d1ZPXlvvTKHa1d8ms5T8hfd0rFmaJTb3vWwuaTWjYFY&X-Amz-Signature=5e831a8caa18b626aff1b909aacc7dfa0e8b23ba6e66a32ee60543ad2df1ae16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

