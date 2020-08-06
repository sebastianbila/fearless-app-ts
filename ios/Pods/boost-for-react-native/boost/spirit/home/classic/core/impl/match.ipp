/*=============================================================================
    Copyright (c) 1998-2003 Joel de Guzman
    http://spirit.sourceforge.net/

    Use, modification and distribution is subject to the Boost Software
    License, Version 1.0. (See accompanying file LICENSE_1_0.txt or copy at
    http://www.boost.org/LICENSE_1_0.txt)
=============================================================================*/
#if !defined(BOOST_SPIRIT_MATCH_IPP)
#define BOOST_SPIRIT_MATCH_IPP
#include <algorithm>

namespace boost { namespace spirit {

BOOST_SPIRIT_CLASSIC_NAMESPACE_BEGIN

    template <typename Loader>
    inline match<Loader>::match()
    : len(-1), val() {}

    template <typename Loader>
    inline match<Loader>::match(std::size_t length_)
    : len(length_), val() {}

    template <typename Loader>
    inline match<Loader>::match(std::size_t length_, ctor_param_t val_)
    : len(length_), val(val_) {}

    template <typename Loader>
    inline bool
    match<Loader>::operator!() const
    {
        return len < 0;
    }

    template <typename Loader>
    inline std::ptrdiff_t
    match<Loader>::length() const
    {
        return len;
    }

    template <typename Loader>
    inline bool
    match<Loader>::has_valid_attribute() const
    {
        return val.is_initialized();
    }

    template <typename Loader>
    inline typename match<Loader>::return_t
    match<Loader>::value() const
    {
        BOOST_SPIRIT_ASSERT(val.is_initialized());
        return *val;
    }

    template <typename Loader>
    inline void
    match<Loader>::swap(match& other)
    {
        std::swap(len, other.len);
        std::swap(val, other.val);
    }

    inline match<nil_t>::match()
    : len(-1) {}

    inline match<nil_t>::match(std::size_t length_)
    : len(length_) {}

    inline match<nil_t>::match(std::size_t length_, nil_t)
    : len(length_) {}

    inline bool
    match<nil_t>::operator!() const
    {
        return len < 0;
    }

    inline bool
    match<nil_t>::has_valid_attribute() const
    {
        return false;
    }

    inline std::ptrdiff_t
    match<nil_t>::length() const
    {
        return len;
    }

    inline nil_t
    match<nil_t>::value() const
    {
        return nil_t();
    }

    inline void
    match<nil_t>::value(nil_t) {}

    inline void
    match<nil_t>::swap(match<nil_t>& other)
    {
        std::swap(len, other.len);
    }

BOOST_SPIRIT_CLASSIC_NAMESPACE_END

}} // namespace boost::spirit

#endif

