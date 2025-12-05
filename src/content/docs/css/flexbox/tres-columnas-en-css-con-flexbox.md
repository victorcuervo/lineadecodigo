---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNBOLHO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh%2BhFMen0jtY11QNiEQBZtdRyA6yCNbWzoyhIeUepryAiAH4YVOR19QzA2Gz96%2FFJN0SoVvJG00aVIQ%2BB1n1HMcpSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMrKT%2Bg%2Bv5x5wAOPIaKtwDe%2BAAXVaK5lAqoGYJ4%2BBiexh%2BAqQ%2FkwC4%2FN0NCmW5RMLOK0NiZQVj0sr9nwCTtasfS%2Bugp%2Br2ev0zFxgBghSkKzlw8cAZrbUUsB7UnrmKVuvxoczDFD%2BKmC44HznXED5CQtTnZMt1GoZjjq4bpxtNrYZXwwImWDMdeHPJokADx%2BnEWrEvtMFRBtwXOalSJTDtB8MX13QwtGkE3mh4w93k8vnoyWLHdF5P43OtX3KwdeJTSFlS%2BsFZBkv%2FHefdMiahgYauFGB%2FQqYQ23kmwpkDM2JgNCysaTx6fFBhPMRTLr9cXUzb95OoKc3vnHSFsOKiLv7np9YZ%2ForAwtl9vxuIdOLol5HqObZSivrjlL2etylSsjoQt0n8wGg0v7AXIW4A974qVpOme6FsllDEm%2F42UcAWHgpxD1TL%2BXqqCPO5C9NDALegN6MhlBKmfH35q4575YWxkPpRR1IZnmYFzcICwUgUFIPfvBe1u%2B77ZWcYgzZlJzRcjqr3ADlaa38xgWUZKqoJbEp4Sv%2BgC596jxmQ%2FHLdOKc5DQ57iDH7bXeLZT3fGYlhHQIA7m7HWJc3JipZuWZbYtr0pLKiKqSeH5nb1y%2BrE1UaYBJgOpBcOn4gPfb0ht%2FZ4JEGZ%2BFcFRswiNHKyQY6pgEraDzj5KggatRntHpJlGi%2Fp9u6SAyxpscqxjmnf87mqvIqtYjY1biMe6YFMsi22meYK0vCrz9x5N3MiUb6EmyG3vF%2FaBalk3ln1PaOa6POd09Q0w%2BHSowupGVIM%2BwfeKM6OawElFMoydNBj6obwq%2B83JXy6ZAKPqJM167mTAk1bS0re2dZCpYt8GPn8R%2F4a%2Brv4gsKpDFfqfQUDElIeNg3rYxVUc94&X-Amz-Signature=08bbddd5e46754ed7b53abf0a128f12d710a7d06420307a5eba941c1b4b7c39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPNBOLHO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T132441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFh%2BhFMen0jtY11QNiEQBZtdRyA6yCNbWzoyhIeUepryAiAH4YVOR19QzA2Gz96%2FFJN0SoVvJG00aVIQ%2BB1n1HMcpSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMrKT%2Bg%2Bv5x5wAOPIaKtwDe%2BAAXVaK5lAqoGYJ4%2BBiexh%2BAqQ%2FkwC4%2FN0NCmW5RMLOK0NiZQVj0sr9nwCTtasfS%2Bugp%2Br2ev0zFxgBghSkKzlw8cAZrbUUsB7UnrmKVuvxoczDFD%2BKmC44HznXED5CQtTnZMt1GoZjjq4bpxtNrYZXwwImWDMdeHPJokADx%2BnEWrEvtMFRBtwXOalSJTDtB8MX13QwtGkE3mh4w93k8vnoyWLHdF5P43OtX3KwdeJTSFlS%2BsFZBkv%2FHefdMiahgYauFGB%2FQqYQ23kmwpkDM2JgNCysaTx6fFBhPMRTLr9cXUzb95OoKc3vnHSFsOKiLv7np9YZ%2ForAwtl9vxuIdOLol5HqObZSivrjlL2etylSsjoQt0n8wGg0v7AXIW4A974qVpOme6FsllDEm%2F42UcAWHgpxD1TL%2BXqqCPO5C9NDALegN6MhlBKmfH35q4575YWxkPpRR1IZnmYFzcICwUgUFIPfvBe1u%2B77ZWcYgzZlJzRcjqr3ADlaa38xgWUZKqoJbEp4Sv%2BgC596jxmQ%2FHLdOKc5DQ57iDH7bXeLZT3fGYlhHQIA7m7HWJc3JipZuWZbYtr0pLKiKqSeH5nb1y%2BrE1UaYBJgOpBcOn4gPfb0ht%2FZ4JEGZ%2BFcFRswiNHKyQY6pgEraDzj5KggatRntHpJlGi%2Fp9u6SAyxpscqxjmnf87mqvIqtYjY1biMe6YFMsi22meYK0vCrz9x5N3MiUb6EmyG3vF%2FaBalk3ln1PaOa6POd09Q0w%2BHSowupGVIM%2BwfeKM6OawElFMoydNBj6obwq%2B83JXy6ZAKPqJM167mTAk1bS0re2dZCpYt8GPn8R%2F4a%2Brv4gsKpDFfqfQUDElIeNg3rYxVUc94&X-Amz-Signature=2c95b25f00d54228fec6633791c9f88bcca21366a437f867d56ba34014b0dd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

