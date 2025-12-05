---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFGNMEY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyl08%2FPhcb6g4Nr8BTnZJesMXv%2FIOfqyJ%2FpmnDbJUsXAiB8kLfAZIVy8JmCRi25%2Fcw00chW8t%2BKXrj4aWs9Yf4xOSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCnRoYIpdZ%2FDRV78zKtwDHW8oR8Uvd0oVKO0al%2FbNykAEPGu0%2BwYLdLLqxnvVLw4%2B2nZRwwtzyLOVZ9HBtDPSfCchAeBCZhcsIDYq87FTBXQbmRxbM1%2FqxAbQ8gkCMAUUoNTQtXLlxppka6k0MkTwPWukilIfOPHR0H7qPVjPLhPC2j4gpM%2B%2BAGh4VeCowZp2IupaManjFD0me8SXf49pJze12jWiNSf%2BQ%2F9PqSdo2uSbBitDWtZDDQQM%2FYyMvkTvz1WlWCvxrWn4ZKg%2Bj2Hy7vEV%2Ff%2FZqWV1Y0fjpAcae1KEcxiYuXWLQkV%2FutsMfjPKOMD2Y5E%2F0VbYJo12WE%2FeSGJWaMC9bK7LKHpS%2BPn%2FuHXNKUZFCISl8TdnpMRxJ9TO0KamGIaT%2F8TcpwhTtnfK1Sp5qrvrkY8nPqjck%2F6eGOBL24wEwppHp25UwVcOknjjGVt4L8ClR1r5Ms5m4nQq9ybjEmcNXd7LvZdU6gIEY24UhcLF0WagGo2wUY95LKxTEGakGWMTglCUUqu9QxNra8FuaETcqKAljvVvsrcohnlQVsR46w0hmN89J6%2BHlhy4jGzjNv%2Fi6HLtjkSz4VjFKS9frcFsEaSuldUaHeHaNY9wMZWQ6a%2FOpC71x0O98oO1sxBCuwlD3FIYFhMw3K3JyQY6pgG6RNefMJs%2BY4N9KO1%2BF2Vfsr5xwVNR%2BhWTIJh6pVPHyVmh97fzDjBmjk1u4m9hlF%2Bh5HsJaSW4iclbUdS3gWqYVRbXolWnf1OCQ%2Fo4t3RTVYNfcNvilVy1FxH0FbcLpibx08JhLoNyg9yfyL9UrTJy84YaK7p4EWpzd6tiCywuEDRoJZZQNaz8R77DZr5wHlQ5W0Fl3s4DAFFaxmIgoXiH3DWK27N9&X-Amz-Signature=736ccfcfdb767a9db07ab502fcae5342d04e481254200f6ae46ae4ceb704fb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTFGNMEY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEyl08%2FPhcb6g4Nr8BTnZJesMXv%2FIOfqyJ%2FpmnDbJUsXAiB8kLfAZIVy8JmCRi25%2Fcw00chW8t%2BKXrj4aWs9Yf4xOSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCnRoYIpdZ%2FDRV78zKtwDHW8oR8Uvd0oVKO0al%2FbNykAEPGu0%2BwYLdLLqxnvVLw4%2B2nZRwwtzyLOVZ9HBtDPSfCchAeBCZhcsIDYq87FTBXQbmRxbM1%2FqxAbQ8gkCMAUUoNTQtXLlxppka6k0MkTwPWukilIfOPHR0H7qPVjPLhPC2j4gpM%2B%2BAGh4VeCowZp2IupaManjFD0me8SXf49pJze12jWiNSf%2BQ%2F9PqSdo2uSbBitDWtZDDQQM%2FYyMvkTvz1WlWCvxrWn4ZKg%2Bj2Hy7vEV%2Ff%2FZqWV1Y0fjpAcae1KEcxiYuXWLQkV%2FutsMfjPKOMD2Y5E%2F0VbYJo12WE%2FeSGJWaMC9bK7LKHpS%2BPn%2FuHXNKUZFCISl8TdnpMRxJ9TO0KamGIaT%2F8TcpwhTtnfK1Sp5qrvrkY8nPqjck%2F6eGOBL24wEwppHp25UwVcOknjjGVt4L8ClR1r5Ms5m4nQq9ybjEmcNXd7LvZdU6gIEY24UhcLF0WagGo2wUY95LKxTEGakGWMTglCUUqu9QxNra8FuaETcqKAljvVvsrcohnlQVsR46w0hmN89J6%2BHlhy4jGzjNv%2Fi6HLtjkSz4VjFKS9frcFsEaSuldUaHeHaNY9wMZWQ6a%2FOpC71x0O98oO1sxBCuwlD3FIYFhMw3K3JyQY6pgG6RNefMJs%2BY4N9KO1%2BF2Vfsr5xwVNR%2BhWTIJh6pVPHyVmh97fzDjBmjk1u4m9hlF%2Bh5HsJaSW4iclbUdS3gWqYVRbXolWnf1OCQ%2Fo4t3RTVYNfcNvilVy1FxH0FbcLpibx08JhLoNyg9yfyL9UrTJy84YaK7p4EWpzd6tiCywuEDRoJZZQNaz8R77DZr5wHlQ5W0Fl3s4DAFFaxmIgoXiH3DWK27N9&X-Amz-Signature=33e4928be645597f4d234742cbda281abfcfb15ea2b70386d89826f9ee5ac43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

