---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55TNT25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB201keHRp84xxkAy5xd17cQwrBZxZ%2FH3tXU763XRiRAiBydMA3kizhiJZqnbIrVWmK2jalWnLEJoAnvln6s4XBRCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM01C%2FPFqth4ozKl%2FyKtwD19dfLjE44dqxNJ8Wc1GA3rEivQSfdFl6q4klDp0yuJbDD6DgG2FDCsETzJgCLh7LVxVMhX9E2ha1%2FpsnvPxBEHecqJRmH7y1XuLYTIHpYQLQJK9zfpxNzyNb0NnvKb1qWkYcSGNOvYSm9CoBOKmAVwjmsQ4tEZdEjf%2FIa9XeMzltjNzjjNGep4SSe6lGeSxXUFiiCeE4TjFSLrCmgOMjXyFms7tt1BI23E62KkKMiTne1pwiF%2Fn%2B3gHGlSmTw9iYYxMWAGWRM0TFs1ZYfLuZ6jmfg34wAo1ODg3x8q%2F6oJd3BrtZzgjKRWM6H7lHbmCyRV0FLzzslZKqKcwZFKmSPBDa18%2FsdLalAaMpUa%2Fgs1PrOwWYKDhX9afaPngZBXChlIIiyrzlA0bFrzK6ARshrutOMnItd8Q4Adzc%2BlXE8tXlV8AA7pgAkvOWeGBtCODuvLsQMjqbA02zfHAZditwSbwSu5LeHe0qa1SAzmijqIHXDozXPN4qkSr1PMzNmmgvvqlG4QflLWWIHxZhq%2BhRTCLSE%2B%2B9vM5sLXhoLVaCYgi0PnuaXB2hsJrnZS5BDUo8uzpPCL01muturt%2Fc3%2FNBxTWQm0Bxi2gznnQdY0z%2FerWEaV8U%2BPSKTdsY5row%2BN3OyQY6pgHpOBdm%2BuQ%2FHjEt7phSknV%2FEagRAz2md6MnqyOS0mbKxs5wMs3c4p%2FQyRmtH5erPSr1hB7gQ8b%2BQK9FwazyI8q9X9CiOExeJ%2FSLzXq6dDmNSLWBklV7AL5uHQRUJ9274r2UNDxjUj0OAdk0EM43lb7dT%2BbL3jhVQrbZ2YkEer2BxVTEmbp7v2DBPKyl8DGDpzbn37qbVeN8rfMdUcLVhc47GnihDgLU&X-Amz-Signature=68c9247242126ad1489f9ba17759db664fae7dfe76ab1ffc2bed7addae7a532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U55TNT25%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB201keHRp84xxkAy5xd17cQwrBZxZ%2FH3tXU763XRiRAiBydMA3kizhiJZqnbIrVWmK2jalWnLEJoAnvln6s4XBRCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM01C%2FPFqth4ozKl%2FyKtwD19dfLjE44dqxNJ8Wc1GA3rEivQSfdFl6q4klDp0yuJbDD6DgG2FDCsETzJgCLh7LVxVMhX9E2ha1%2FpsnvPxBEHecqJRmH7y1XuLYTIHpYQLQJK9zfpxNzyNb0NnvKb1qWkYcSGNOvYSm9CoBOKmAVwjmsQ4tEZdEjf%2FIa9XeMzltjNzjjNGep4SSe6lGeSxXUFiiCeE4TjFSLrCmgOMjXyFms7tt1BI23E62KkKMiTne1pwiF%2Fn%2B3gHGlSmTw9iYYxMWAGWRM0TFs1ZYfLuZ6jmfg34wAo1ODg3x8q%2F6oJd3BrtZzgjKRWM6H7lHbmCyRV0FLzzslZKqKcwZFKmSPBDa18%2FsdLalAaMpUa%2Fgs1PrOwWYKDhX9afaPngZBXChlIIiyrzlA0bFrzK6ARshrutOMnItd8Q4Adzc%2BlXE8tXlV8AA7pgAkvOWeGBtCODuvLsQMjqbA02zfHAZditwSbwSu5LeHe0qa1SAzmijqIHXDozXPN4qkSr1PMzNmmgvvqlG4QflLWWIHxZhq%2BhRTCLSE%2B%2B9vM5sLXhoLVaCYgi0PnuaXB2hsJrnZS5BDUo8uzpPCL01muturt%2Fc3%2FNBxTWQm0Bxi2gznnQdY0z%2FerWEaV8U%2BPSKTdsY5row%2BN3OyQY6pgHpOBdm%2BuQ%2FHjEt7phSknV%2FEagRAz2md6MnqyOS0mbKxs5wMs3c4p%2FQyRmtH5erPSr1hB7gQ8b%2BQK9FwazyI8q9X9CiOExeJ%2FSLzXq6dDmNSLWBklV7AL5uHQRUJ9274r2UNDxjUj0OAdk0EM43lb7dT%2BbL3jhVQrbZ2YkEer2BxVTEmbp7v2DBPKyl8DGDpzbn37qbVeN8rfMdUcLVhc47GnihDgLU&X-Amz-Signature=2f62d4e24a09da487acc3ed3cd63b85bcd77e6f4aed38efc4f0f0329359a7738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

