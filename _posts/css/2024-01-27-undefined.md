---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFC3GRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCb%2BWtnOcsMbiZaOg200uAWgjP%2F5%2FznEDNbgpmNk%2FtL6gIgWHfnHbGjdh1URN7SIzQoULITeOpN0rtwqxfz8e3DDc8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBqemVT3iyjvo7dvLCrcA9fC0UgHgoSW48bjHQGOPgheUNaJpZ1iM1VHV6H9wdJzV%2BCuz1uElF1tnmc7HWnzkfP6hiJRb5gsCGNak6pfKqg8g5jaLYVMt3S93D00xK5E3fFNGPSZ71ZypQgSeU64LxfmjFxNSlo3a6%2Fw0Sy44pk%2FYUdkYp7ENtGLFL0Vg4tKS1K%2FEUzpFVyaLhCqpu%2FqWc5Ev81sH8AgQNXBsBIUXsjNu3UfQV1aKjq%2BW4URY2%2FwCebgbaFA7orzOXAws8p%2BCssh0lxXP1cUKo93f8oABT8eM3g8BuI6pUIxjwu1Rw0eh98Nw3jZgOp4%2B8%2F3518pTF%2F81mOyIZ4svE08s18Xz3tIN1ZnJWwVkJqsTDnMwrR49kj7phR%2FKa9TtuIShUmQPR4K%2FejvgVbGY3Y5QdkDVlVhBbQmQGihShJvl9fD8Cw3HnwbuySDJ8j9dwFieV921k9GDX%2FdZOBK4kk%2FVhhOs3TbNrS%2FkkrMDz0r1CFd%2B8ev9QoOBXZT98%2F9Pc066vFlOfLKshmJI6%2F%2BfTL0Pl8dLt61uQqniTeFTMzODw%2FiQ8zHgp0tTiTl0gRLuiFYeNlLHbmAigrAA58Jq4iOOr4JFEHyT3SziytZZXdYbd5unaXe47rf0iKLg23ljvXWMMi5v8kGOqUB5QePcQ%2BA2Q1aLznQA%2FrT%2B2DXoF7UPiUclvwdajZl5ein1jprrw%2Bw%2FilgRUab65S%2Bi88qFqLwCMi3ijUY8kCEZHAobqibLqrWtqb6TwC5Hg9LgmXyJKXoWnyOUpUUN%2BvOi7d3zcIMHj%2FVV88D8HApRJPk4wr8yrlUGsV33x7%2BVvVaHpf9jtsH1C4C00e9%2BU5pnQ3izMdGXZRJriIo7wGg5%2F0NtUcs&X-Amz-Signature=6d961e73ee7866067e54bb6f92c641704edc42c12613b26eedd65234f6f515e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFC3GRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCb%2BWtnOcsMbiZaOg200uAWgjP%2F5%2FznEDNbgpmNk%2FtL6gIgWHfnHbGjdh1URN7SIzQoULITeOpN0rtwqxfz8e3DDc8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBqemVT3iyjvo7dvLCrcA9fC0UgHgoSW48bjHQGOPgheUNaJpZ1iM1VHV6H9wdJzV%2BCuz1uElF1tnmc7HWnzkfP6hiJRb5gsCGNak6pfKqg8g5jaLYVMt3S93D00xK5E3fFNGPSZ71ZypQgSeU64LxfmjFxNSlo3a6%2Fw0Sy44pk%2FYUdkYp7ENtGLFL0Vg4tKS1K%2FEUzpFVyaLhCqpu%2FqWc5Ev81sH8AgQNXBsBIUXsjNu3UfQV1aKjq%2BW4URY2%2FwCebgbaFA7orzOXAws8p%2BCssh0lxXP1cUKo93f8oABT8eM3g8BuI6pUIxjwu1Rw0eh98Nw3jZgOp4%2B8%2F3518pTF%2F81mOyIZ4svE08s18Xz3tIN1ZnJWwVkJqsTDnMwrR49kj7phR%2FKa9TtuIShUmQPR4K%2FejvgVbGY3Y5QdkDVlVhBbQmQGihShJvl9fD8Cw3HnwbuySDJ8j9dwFieV921k9GDX%2FdZOBK4kk%2FVhhOs3TbNrS%2FkkrMDz0r1CFd%2B8ev9QoOBXZT98%2F9Pc066vFlOfLKshmJI6%2F%2BfTL0Pl8dLt61uQqniTeFTMzODw%2FiQ8zHgp0tTiTl0gRLuiFYeNlLHbmAigrAA58Jq4iOOr4JFEHyT3SziytZZXdYbd5unaXe47rf0iKLg23ljvXWMMi5v8kGOqUB5QePcQ%2BA2Q1aLznQA%2FrT%2B2DXoF7UPiUclvwdajZl5ein1jprrw%2Bw%2FilgRUab65S%2Bi88qFqLwCMi3ijUY8kCEZHAobqibLqrWtqb6TwC5Hg9LgmXyJKXoWnyOUpUUN%2BvOi7d3zcIMHj%2FVV88D8HApRJPk4wr8yrlUGsV33x7%2BVvVaHpf9jtsH1C4C00e9%2BU5pnQ3izMdGXZRJriIo7wGg5%2F0NtUcs&X-Amz-Signature=30737826d30b498b94b7a248de60691d65da0e21cfdd23a39b1a1435349bb2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

