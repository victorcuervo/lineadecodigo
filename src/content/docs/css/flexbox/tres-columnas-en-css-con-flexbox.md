---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFO3F2Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsL2RaMiVita%2BG5ZATFyDw%2Bu8g95MVVugZ4P2Ak9YSSwIgeAm48ddYbFkny0QhOU4SKtr1%2B1o8OTcqaEYSUawQtR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA4yl2ZkU%2FAkqn9I9SrcA8SzZgyDZxz4bFSPFoY0JXEIZfILRqe%2Bbd%2BKdzTWq%2Br1tKjB2q8NxzyWh6%2FS93Afyu1DuitZrNVAP7zCDD2WPDSdKtvLSLBvCvysqPLSHDdeGB5TZrHyHfuiv7OIOhgWW6rSB9c2MEwW3zZa15%2BdDXE0SEPL4NJ34SZqu%2Bx8XxstjPawzBZGTfeZx%2BKlvyUHch37rXGw2Z5qGGzQRblBCGr1aEiVV%2FPAQjgZ08htqRlb4DaQgzNbsd4Tk8WgcDcygPK8dWXhstzYzXQTrtqGs%2BFl9nwhnkCvdpjHjrC72VgZS%2F%2FhVJfmYIrh7Rg0jRVuH9Cjrt4ovPXK6v4iWUF6NI6Dw%2BfORFB%2BvQRwpGRzkFJtMVXp24BI%2BpQkpMizJWhHMdckv9bmcYaZ4goxl2vjeASZ78epelyvCWhMj8lFL3DtPU6l67yP%2BkBg1pZ68ncDKQssg99FEpKcKe7QQUpRS6AgZA793D7RK56lSyEG0nFm38eIcap8%2FCB%2F7TbKSCBdVsulEg83Z8CqsiF7Up1Si5JTzNLmu24hWpGd6m0PSATlyuuiF%2FQp8cui%2FnjzR6uNKyzCydFZfMOaYj%2BlAAegF7la%2F8Cy55WMEROjBLmXnwR0OZGbRXKSzOZ1EACjMKqMyMkGOqUBUe9y1aYES74DBSsBZWrRm9g8%2FgGwjhmNVqRiikqaZfxgsPJSxEoNXDKuf9L98CB1QNSLg7uIxfXBGUc1iq4ydHXasjfJlJ7tGWdtiLQcvNxCCJpOHiILD%2FpQaQqzOKjjJDHhsFuO3BIq5rJ61ZuJ4bH3YJdQtVA%2FOjKmYv8Gr8SfbWjX6adisPQFB7i99lpbEU6LYrf70dYlr9WIL0I8QlAUFkdn&X-Amz-Signature=97dc019ff15d549dd4bcd4e42c7672653017e017c1c292468bfd865bcfb9336b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFO3F2Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsL2RaMiVita%2BG5ZATFyDw%2Bu8g95MVVugZ4P2Ak9YSSwIgeAm48ddYbFkny0QhOU4SKtr1%2B1o8OTcqaEYSUawQtR8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA4yl2ZkU%2FAkqn9I9SrcA8SzZgyDZxz4bFSPFoY0JXEIZfILRqe%2Bbd%2BKdzTWq%2Br1tKjB2q8NxzyWh6%2FS93Afyu1DuitZrNVAP7zCDD2WPDSdKtvLSLBvCvysqPLSHDdeGB5TZrHyHfuiv7OIOhgWW6rSB9c2MEwW3zZa15%2BdDXE0SEPL4NJ34SZqu%2Bx8XxstjPawzBZGTfeZx%2BKlvyUHch37rXGw2Z5qGGzQRblBCGr1aEiVV%2FPAQjgZ08htqRlb4DaQgzNbsd4Tk8WgcDcygPK8dWXhstzYzXQTrtqGs%2BFl9nwhnkCvdpjHjrC72VgZS%2F%2FhVJfmYIrh7Rg0jRVuH9Cjrt4ovPXK6v4iWUF6NI6Dw%2BfORFB%2BvQRwpGRzkFJtMVXp24BI%2BpQkpMizJWhHMdckv9bmcYaZ4goxl2vjeASZ78epelyvCWhMj8lFL3DtPU6l67yP%2BkBg1pZ68ncDKQssg99FEpKcKe7QQUpRS6AgZA793D7RK56lSyEG0nFm38eIcap8%2FCB%2F7TbKSCBdVsulEg83Z8CqsiF7Up1Si5JTzNLmu24hWpGd6m0PSATlyuuiF%2FQp8cui%2FnjzR6uNKyzCydFZfMOaYj%2BlAAegF7la%2F8Cy55WMEROjBLmXnwR0OZGbRXKSzOZ1EACjMKqMyMkGOqUBUe9y1aYES74DBSsBZWrRm9g8%2FgGwjhmNVqRiikqaZfxgsPJSxEoNXDKuf9L98CB1QNSLg7uIxfXBGUc1iq4ydHXasjfJlJ7tGWdtiLQcvNxCCJpOHiILD%2FpQaQqzOKjjJDHhsFuO3BIq5rJ61ZuJ4bH3YJdQtVA%2FOjKmYv8Gr8SfbWjX6adisPQFB7i99lpbEU6LYrf70dYlr9WIL0I8QlAUFkdn&X-Amz-Signature=42a14bd6f49eda7b5e4fd2cf1a9873bb32c7802f114667bf9b0717f3c5cf8060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

